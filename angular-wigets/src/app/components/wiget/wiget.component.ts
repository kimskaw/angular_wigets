import { Component, input } from '@angular/core';
import { Wiget } from '../../models/dashboard';

@Component({
  selector: 'app-wiget',
  standalone: true,
  imports: [],
  templateUrl: './wiget.component.html',
  styleUrl: './wiget.component.css'
})
export class WigetComponent {
  data = input.required<Wiget>();
}
