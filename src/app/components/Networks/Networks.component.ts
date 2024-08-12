import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Networks',
  templateUrl: './Networks.component.html',
  styleUrls: ['./Networks.component.css']
})
export class NetworksComponent implements OnInit {
  linkedinHover : boolean = false;
  githubHover : boolean = false;
  color: string = 'black';
  constructor() { }

  ngOnInit() {
  }

}
