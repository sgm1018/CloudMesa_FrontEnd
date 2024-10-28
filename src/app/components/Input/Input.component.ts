import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() isIcon : boolean = false;
  @Input() icon : string = "";
  @Input() options : any[] = [];
  @Output() onChange : EventEmitter<any> = new EventEmitter();
  content : any = "";
  constructor() { }

  ngOnInit() {
  }



  change(){
    console.log(this.content);
    this.onChange.emit(this.content);
  }



}
