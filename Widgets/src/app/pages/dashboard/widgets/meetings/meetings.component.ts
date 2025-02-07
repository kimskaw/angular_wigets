import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.scss'
})
export class MeetingsComponent {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };
  

  constructor() {}

  ngOnInit(): void {
    const chartDom = this.chartContainer.nativeElement;
    const myChart = echarts.init(chartDom);

    if (this.option) {
      myChart.setOption(this.option);
    }
  }
}
