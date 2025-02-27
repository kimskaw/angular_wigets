import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { weeklygoalComponent } from './weeklygoal/weeklygoal.component';
import { SeasonProgressComponent } from './seasonProgress/seasonProgress.component';

const components = [
  SeasonProgressComponent,
  weeklygoalComponent
]

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  providers: [SeasonProgressComponent, weeklygoalComponent]
})
export class WidgetsModule { }
