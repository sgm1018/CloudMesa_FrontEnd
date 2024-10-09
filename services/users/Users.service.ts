import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../Base.service';
import { LoginDto } from '../../dto/user/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService {

constructor(httpClient : HttpClient) {
  super(httpClient);
  this.Api_Name = 'Users';
}

login(data : LoginDto){
  return this.post('login', data);
}




}
