import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './fmp_widgets/widgets.module';
import { DashboardComponent } from './dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';

const modules = [
  WidgetsModule,
  DashboardComponent,
  CommonModule,
  
]

@NgModule({
  imports: [modules,
    NgxEchartsModule.forChild(),
    MatTableModule,
    MatRadioModule
  ],
  declarations: [],
  exports: modules, 
})
export class DashBoardModule { }
