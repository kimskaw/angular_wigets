import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-top-groups',
  templateUrl: './top-groups.component.html',
  styleUrl: './top-groups.component.scss'
})
export class TopGroupsComponent {


  tableData = [
    {  group: 'Alpha', name: 'John Doe', finding: 15, fm: 7, picking: 3 },
    { group: 'Beta', name: 'Jane Smith', finding: 10, fm: 5, picking: 8 },
    { group: 'Alpha', name: 'Alice Johnson', finding: 20, fm: 9, picking: 12 },
    { group: 'Gamma', name: 'Bob Brown', finding: 8, fm: 4, picking: 6 },
    { group: 'Beta', name: 'Charlie Davis', finding: 18, fm: 11, picking: 7 }
  ];
  

  tableColumns = ['group', 'name', 'finding', 'fm', 'picking'];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  matTableData = new MatTableDataSource<any>([]);

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  @ViewChild(MatPaginator, { static: false }) set paginator(v: MatPaginator) {this.matTableData.paginator = v;}

  ngOnInit(): void {
    this.matTableData = new MatTableDataSource(this.tableData)
  }


}
