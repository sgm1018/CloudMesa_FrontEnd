import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private isDarkMode : boolean = false;

constructor() { }



getIsDarkMode(){
  return this.isDarkMode;
}

toggleIsDarkMode(){
  this.isDarkMode = !this.isDarkMode;
}




}
