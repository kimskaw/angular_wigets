import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './widgets/widgets.module';
import { DashboardComponent } from './dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatTableModule } from '@angular/material/table';

const modules = [
  WidgetsModule,
  DashboardComponent,
  CommonModule,
  
]

@NgModule({
  imports: [modules,
    NgxEchartsModule.forChild(),
    MatTableModule
  ],
  declarations: [],
  exports: modules, 
})
export class DashBoardModule { }
