import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CMFService } from '../cmf.service';

@Component({
  selector: 'app-indicador-detail',
  templateUrl: './indicador-detail.component.html',
  styleUrls: ['./indicador-detail.component.styl']
})
export class IndicadorDetailComponent implements OnInit {

  id: string = '';
  items: [];
  loading = false;

  constructor(private route: ActivatedRoute, private cmf: CMFService) { }

  ngOnInit(): void {

    this.loading = true;

    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.cmf.loadDataList(paramMap.get('id'))
      .subscribe( response => {
        this.items = response[ Object.keys(response)[0] ]
        this.loading = false;
      }, error => {
        this.loading = false;
      })
    })
  }


}
