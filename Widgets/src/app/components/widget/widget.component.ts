import { ChangeDetectorRef, Component, Input, input, signal } from '@angular/core';
import { Widget } from '../../models/dashboard';
import { NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetOptionsComponent } from './widget-options/widget-options.component';
import { NgIf } from '@angular/common';
import {MediaMatcher} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet, MatButtonModule, MatIcon, WidgetOptionsComponent, NgIf, CommonModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  host: {
    '[style.grid-area]': '"span " + (data.rows ?? 1) + "/span " + (data.columns ?? 1)'
  }
})
export class WidgetComponent {
  
  @Input() data!: Widget;
  @Input() store!: any;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  
  showOptions = signal(false);

  constructor(
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(){
  console.log(this.data.label, "data") 
  }
}
