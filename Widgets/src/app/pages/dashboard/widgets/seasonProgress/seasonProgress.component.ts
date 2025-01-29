import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-seasonProgress',
  templateUrl: './seasonProgress.component.html',
  styleUrl: './seasonProgress.component.scss'
})
export class SeasonProgressComponent {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  option = {
    xAxis: {
      type: 'category',
      data: ['F', 'M', 'P']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150],
        type: 'bar',
        showBackground: true,
        color: '#4A3AFF',
        backgroundStyle: {
          color: '#F8F8FF'
        }
      }
    ]
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
