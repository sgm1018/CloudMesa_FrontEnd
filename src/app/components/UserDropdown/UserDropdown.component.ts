import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-UserDropdown',
  templateUrl: './UserDropdown.component.html',
  styleUrls: ['./UserDropdown.component.css']
})
export class UserDropdownComponent implements OnInit {
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
