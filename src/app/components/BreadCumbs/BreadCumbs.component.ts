import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-BreadCumbs',
  templateUrl: './BreadCumbs.component.html',
  styleUrls: ['./BreadCumbs.component.css']
})
export class BreadCumbsComponent implements OnInit {
  listaRutas : string[] = ['Home', 'Main', 'Pruebas', 'Redes', 'Github'];
  constructor() { }

  ngOnInit() {
  }

}
