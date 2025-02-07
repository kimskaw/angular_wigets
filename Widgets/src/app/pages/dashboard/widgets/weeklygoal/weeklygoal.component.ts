import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-weeklygoal',
  templateUrl: './weeklygoal.component.html',
  styleUrls: ['./weeklygoal.component.scss']
})
export class weeklygoalComponent {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow', // Tooltip type: 'shadow', 'line', etc.
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Finding', 'Meeting', 'Picking'],
    },
    series: [
      {
        name: 'Achieved',
        type: 'bar',
        stack: 'total',
        label: { show: true },
        emphasis: { focus: 'series' },
        color: '#4A3AFF',
        data: [320, 302, 301],
      },
      {
        name: 'Remaining',
        type: 'bar',
        stack: 'total',
        label: { show: true },
        emphasis: { focus: 'series' },
        color: '#E5EAFC',
        data: [120, 132, 101],
      },
    ],
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
