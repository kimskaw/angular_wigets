import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ViewsComponent } from './views/views.component';

const components = [
  ViewsComponent,
  SubscribersComponent
]

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
  providers: [ViewsComponent, SubscribersComponent]
})
export class WigetsModule { }
