import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indicadores-list',
  templateUrl: './indicadores-list.component.html',
  styleUrls: ['./indicadores-list.component.styl']
})
export class IndicadoresListComponent implements OnInit {


  indicadores = [
    {
      name: 'Dolar',
      key: 'dolar'
    },
    {
      name: 'Euro',
      key: 'euro'
    },
    {
      name: 'IPC',
      key: 'ipc'
    },
    {
      name: 'UF',
      key: 'uf'
    },
    {
      name: 'UTM',
      key: 'utm'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
