import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { WidgetComponent } from '../../components/widget/widget.component';
import { Widget } from '../../models/dashboard';
import { weeklygoalComponent } from './widgets/weeklygoal/weeklygoal.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { wrapGrid } from 'animate-css-grid';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable, Observer } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

export interface DashboardTab {
  label: string;
  view: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WidgetComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatTabsModule,
  ],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  store = inject(DashboardService);
  tab: any
  tabIndex: number = 0;
  asyncTabs: Observable<DashboardTab[]>;
  // dashboard = viewChild.required<ElementRef>('dashboard');
  // test(){
  //   console.log(wrapGrid(this.dashboard().nativeElement), 'dashboard');
  // }
  dashboard = signal<ElementRef | null>(null);
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.asyncTabs = new Observable(
      (observer: Observer<DashboardTab[]>) => {
        setTimeout(() => {
          observer.next(this.generateTabs());
        }, 1000);
      }
    );
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  tabClick(tab :any) {
		this.tab = tab
		this.tabIndex = tab.index;
	}

	generateTabs(): Array<DashboardTab>  {
		let tabs:any = [
      {label:"FMP"},
      {label:"CCT"},
      {label:"Table"},
    ];
    return tabs
  }
  ngAfterViewInit() {
    if (this.dashboard() && this.dashboard()!.nativeElement) {
      wrapGrid(this.dashboard()!.nativeElement, { duration: 300 });
    }
  }
}
