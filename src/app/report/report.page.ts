import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexGrid,
  ApexMarkers,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any[];
};

@Component({
  selector: 'app-report',
  templateUrl: 'report.page.html',
  styleUrls: ['report.page.scss'],
})
export class ReportPage {
  public options: Partial<ChartOptions> = {};

  constructor() {
    this.spackLine();
  }

  spackLine() {
    this.options = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
        },
      ],
      stroke: {
        width: 3,
      },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 16,
          left: 16,
          bottom: 10,
        },
      },
      colors: ['#ffffff'],
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            },
          },
        },
      },
    };
  }
}
