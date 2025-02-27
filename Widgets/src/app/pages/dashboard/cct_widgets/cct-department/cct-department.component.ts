import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-cct-department',
  templateUrl: './cct-department.component.html',
  styleUrl: './cct-department.component.scss'
})
export class CctDepartmentComponent {
@ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  option: any

constructor() {
  this.initializeChart();
}

private initializeChart(): void {
  // Raw data for each series; each sub-array represents a series (row) for 7 days.
  const rawData = [
    [100, 302, 301, 334, 390, 330, 320],
    [320, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [150, 212, 201, 154, 190, 330, 410],
    [820, 832, 901, 934, 1290, 1330, 1320]
  ];

  // Calculate total for each day (column totals)
  const totalData: number[] = [];
  for (let i = 0; i < rawData[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < rawData.length; j++) {
      sum += rawData[j][i];
    }
    totalData.push(sum);
  }

  // Define grid settings
  const grid = {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  };

  // Series names for the five data series
  const seriesNames = [
    'Direct',
    'Mail Ad',
    'Affiliate Ad',
    'Video Ad',
    'Search Engine'
  ];

  // Create series array by mapping over seriesNames and calculating the percentage for each day
  const series = seriesNames.map((name, sid) => {
    return {
      name: name,
      type: 'bar',
      stack: 'total',
      barWidth: '60%',
      label: {
        show: true,
        formatter: (params: any) =>
          Math.round(params.value * 1000) / 10 + '%'
      },
      data: rawData[sid].map((d, did) =>
        totalData[did] <= 0 ? 0 : d / totalData[did]
      )
    };
  });

  // Set the chart option
  this.option = {
    legend: {
      selectedMode: false
    },
    grid: grid,
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
