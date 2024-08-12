import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TopBar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.css']
})
export class TopBarComponent implements OnInit {
  name : string="Name1 Name2";
  email: string="email.example@example.com";

  isOpen : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisible(){
    this.isOpen = !this.isOpen;
  }

}
