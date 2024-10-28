import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css']
})
export class InputComponent implements OnInit {
  @Input() mode : string = "h"; // h = horizontal, v = vertical
  @Input() type : string = "text";
  @Input() placeholder : string = "";
  @Input() value : string = "";
  @Input() label : string = "";

  @Input() options : any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
