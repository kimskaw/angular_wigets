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
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '10%', // Add more space on the right for percentage labels
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
        label: { 
          show: true, 
          position: 'inside',
          formatter: '{c}' // Shows the actual achieved value
        },
        emphasis: { focus: 'series' },
        color: '#4A3AFF',
        data: [320, 302, 301],
        barWidth: 15,
        itemStyle: {
          borderRadius: [10, 0, 0, 10], // Rounded top edges
        },
      },
      {
        name: 'Remaining',
        type: 'bar',
        stack: 'total',
        label: { show: true, position: 'inside' },
        emphasis: { focus: 'series' },
        color: '#E5EAFC',
        data: [120, 132, 101],
        barWidth: 15,
        itemStyle: {
          borderRadius: [0, 10, 10, 0],
        },
      },
      {
        name: 'Percentage',
        type: 'bar',
        stack: 'total',
        barWidth: 0, // Invisible bar, used only for percentage labels
        label: {
          show: true,
          position: 'right', // Places percentage label outside the bars
          formatter: (params: { dataIndex: number }) => {
            const achieved = this.option.series[0].data[params.dataIndex] as number;
            const total = achieved + (this.option.series[1].data[params.dataIndex] as number);
            return `${((achieved / total) * 100).toFixed(1)}%`; // Percentage with 1 decimal
          },
          color: '#333', // Label color
          fontWeight: 'bold',
        },
        data: [0, 0, 0], // Placeholder data
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
