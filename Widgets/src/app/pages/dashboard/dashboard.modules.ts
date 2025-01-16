import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModule } from './widgets/widgets.module';
import { DashboardComponent } from './dashboard.component';

const modules = [
  WidgetsModule,
  DashboardComponent
]

@NgModule({
  imports: modules,
  declarations: [],
  exports: modules, 
})
export class DashBoardModule { }
