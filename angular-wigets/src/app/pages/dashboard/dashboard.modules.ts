import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WigetsModule } from './wigets/wigets.module';
import { DashboardComponent } from './dashboard.component';

const modules = [
  WigetsModule,
  DashboardComponent
]

@NgModule({
  imports: modules,
  declarations: [],
  exports: modules, 
})
export class DashBoardModule { }
