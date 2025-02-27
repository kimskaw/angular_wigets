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
        },
        label: {
          show: true, // Show the label
          position: 'inside', // Position the label on top of the bar
          color: '#ffff', // Label color
          fontSize: 14, // Font size for the label
          fontWeight: 'bold' // Font weight for the label
        },
        barWidth: 60, // Adjust as needed
        markLine: {
          symbol: 'none', // Hide line endpoints
          lineStyle: {
            color: '#4A3AFF', // Line color
            width: 2
          },
          data: [
            // Specify each line position manually for each bar
            { xAxis: 'F', yAxis: 120 },
            { xAxis: 'M', yAxis: 200 },
            { xAxis: 'P', yAxis: 150 }
          ]
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
