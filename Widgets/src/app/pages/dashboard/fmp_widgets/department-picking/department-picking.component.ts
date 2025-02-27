import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-department-picking',
  templateUrl: './department-picking.component.html',
  styleUrl: './department-picking.component.scss'
})
export class DepartmentPickingComponent {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['D1', 43.3],
        ['D2', 83.1],
        ['D3', 86.4],
        ['D4', 72.4]
      ]
    },
    barWidth: '60%',
    barCategoryGap: '0%',
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: (params: { dataIndex: number; }) => {
            const colors = ['#FF6347', '#FFD700', '#32CD32', '#8A2BE2']; // Define an array of colors
            return colors[params.dataIndex]; // Return a color based on the index
          }
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
