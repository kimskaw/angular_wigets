import { Component } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.scss'
})
export class TableFilterComponent {
  showDepartmentType: boolean = false;
  
  checklog(){
    console.log(this.showDepartmentType, "DEPT")
  }
}
