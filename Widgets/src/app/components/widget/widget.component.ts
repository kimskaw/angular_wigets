import { Component, Input, input, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptionsComponent, NgIf],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  host: {
    '[style.grid-area]': '"span " + (data.rows ?? 1) + "/span " + (data.columns ?? 1)'
  }
})
export class WidgetComponent {
  @Input() data!: Widget;
  showOptions = signal(false);
}
