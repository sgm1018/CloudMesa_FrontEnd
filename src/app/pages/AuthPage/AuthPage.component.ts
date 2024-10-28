import { UsersService } from './../../../../services/users/Users.service';
import { LoginDto } from '../../../../dto/user/LoginDto';
import { MainService } from './../../../../services/Main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AuthPage',
  templateUrl: './AuthPage.component.html',
  styleUrls: ['./AuthPage.component.css']
})
export class AuthPageComponent implements OnInit {
  loginDto : LoginDto = new LoginDto();
  constructor(private mainService: MainService, private UsersService: UsersService) {

  }

  ngOnInit() {
  }

  login(){

  }



  getMainService(){
    return this.mainService;
  }

}
