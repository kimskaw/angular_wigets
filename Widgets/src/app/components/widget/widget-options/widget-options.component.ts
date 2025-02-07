import { Component, inject, Input, input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DashboardService } from '../../../services/dashboard.service';
import { Widget } from '../../../models/dashboard';

@Component({
  selector: 'app-widget-options',
  standalone: true,
  imports: [MatIconModule, MatButtonToggleModule],
  templateUrl: './widget-options.component.html',
  styleUrl: './widget-options.component.scss'
})
export class WidgetOptionsComponent {
  @Input() data!: Widget;
  showOptions = model<boolean>(false);
  store = inject(DashboardService);
  
  testW(x:any){
    console.log('right:', x);
  }
  testH(x:any){
    console.log('left:', x);
  }
}
