import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as echarts from 'echarts';

@Component({
  selector: 'app-weekly-comparison',
  templateUrl: './weekly-comparison.component.html',
  styleUrl: './weekly-comparison.component.scss'
})
export class WeeklyComparisonComponent {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  option: any

  constructor() {
    this.initializeChart();
  }

  private initializeChart(): void {
    let series = [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        stack: 'a',
        name: 'a'
      },
      {
        data: [10, 46, 64, '-', 0, '-', 0],
        type: 'bar',
        stack: 'a',
        name: 'b'
      },
      {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar',
        stack: 'a',
        name: 'c'
      },
      {
        data: [30, '-', 0, 20, 10, '-', 0],
        type: 'bar',
        stack: 'b',
        name: 'd'
      },
      {
        data: [10, 20, 150, 0, '-', 50, 10],
        type: 'bar',
        stack: 'b',
        name: 'e'
      }
    ];

    const stackInfo: {
      [key: string]: { stackStart: number[]; stackEnd: number[] };
    } = {};

    for (let i = 0; i < series[0].data.length; ++i) {
      for (let j = 0; j < series.length; ++j) {
        const stackName = series[j].stack;
        if (!stackName) {
          continue;
        }
        if (!stackInfo[stackName]) {
          stackInfo[stackName] = {
            stackStart: [],
            stackEnd: []
          };
        }
        const info = stackInfo[stackName];
        const data = series[j].data[i];
        if (data && data !== '-') {
          if (info.stackStart[i] == null) {
            info.stackStart[i] = j;
          }
          info.stackEnd[i] = j;
        }
      }
    }

    for (let i = 0; i < series.length; ++i) {
      const data = series[i].data as
        | number[]
        | { value: number; itemStyle: object }[];
      const info = stackInfo[series[i].stack];
      for (let j = 0; j < series[i].data.length; ++j) {
        const isEnd = info.stackEnd[j] === i;
        const topBorder = isEnd ? 20 : 0;
        const bottomBorder = 0;
        data[j] = {
          value: data[j] as number,
          itemStyle: {
            borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
          }
        };
      }
    }

    this.option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: series as any
    };
  }


  
    ngOnInit(): void {
      const chartDom = this.chartContainer.nativeElement;
      const myChart = echarts.init(chartDom);
  
      if (this.option) {
        myChart.setOption(this.option);
      }
    }

}
