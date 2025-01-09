import { Component, inject } from '@angular/core';
import { WigetComponent } from '../../components/wiget/wiget.component';
import { Wiget } from '../../models/dashboard';
import { SubscribersComponent } from './wigets/subscribers/subscribers.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WigetComponent],
  providers: [DashboardService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
store = inject(DashboardService)
}
