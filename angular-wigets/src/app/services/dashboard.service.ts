import { Injectable,signal } from '@angular/core';
import { Wiget } from '../models/dashboard';
import { SubscribersComponent } from '../pages/dashboard/wigets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/wigets/views/views.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  wigets = signal<Wiget[]>([
    {
    id : 1,
    label: 'Subscribers',
    content: SubscribersComponent
  },
  {
    id : 2,
    label: 'Fans',
    content: ViewsComponent
  }
])
  constructor() { }
}
