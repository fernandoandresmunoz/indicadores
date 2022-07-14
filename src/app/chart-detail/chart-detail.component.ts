import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { CMFService } from '../cmf.service';
import 'chartjs-adapter-moment';


@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.styl']
})
export class ChartDetailComponent implements OnInit {

  id: string = '';
  items: any[] = [];
  loading = false;

  @ViewChild('lineChart') lineChart: { nativeElement: string | CanvasRenderingContext2D | HTMLCanvasElement | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>; };
  lines: any;

  constructor(private route: ActivatedRoute, private cmf: CMFService) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {

    this.loading = true;

    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.cmf.loadDataChart(paramMap.get('id'))
      .subscribe( response => {
        this.items = response[ Object.keys(response)[0] ];
        this.createLineChart();
        this.loading = false;
      }, error => {
        this.loading = false;
      })
    })
  }

  createLineChart() {
    if (this.lines) {
      this.lines.destroy();
    }
    this.lines = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.items.map(obj => obj.Fecha),
        datasets: [
          {
            label: 'Valor',
            data: this.items.map(obj =>  Number(obj?.Valor.replace('.', '').replace(',', '.')) ),
            borderWidth: 1,
            borderColor: 'rgb(0, 0, 200)',
          },
        ]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          },
      }
    }});
  }
}
