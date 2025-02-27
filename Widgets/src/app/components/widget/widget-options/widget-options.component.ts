import { Component, inject, Input, input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DashboardService } from '../../../services/fmp-dashboard.service';
import { CctService } from '../../../services/cct-dashboard.service';
import { TableDashboardService } from '../../../services/table-dashboard.service';
import { Widget } from '../../../models/dashboard';

@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  // The widget data (contains at least an id, columns, rows, and optionally a color)
  @Input() data: any;
  // The store service that provides update, move, and remove methods
  @Input() store: any;
  // A control object (or method) to show/hide the options (as used in your close button)
  showOptions = model<boolean>(false);

  ngOnInit(){
    // console.log(this.store, "store options")
  }
  testW(x:any){
    console.log('right:', x);
  }
  testH(x:any){
    console.log('left:', x);
  }

  log(x:any){
    console.log(x, "widget update")
  }
}
