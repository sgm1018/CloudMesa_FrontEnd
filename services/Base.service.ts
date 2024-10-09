import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected Base_Url = 'http://localhost:3000/';
  protected Api_Name = 'api';

  constructor(protected httpClient: HttpClient) { }

  get(url: string) {
    return this.httpClient.get(`${this.Base_Url}${this.Api_Name}/${url}`, { headers: this.getAuthHeaeders() });
  }
  post(url: string, data: any) {
    return this.httpClient.post(`${this.Base_Url}${this.Api_Name}/${url}`, data, { headers: this.getAuthHeaeders() });
  }

  put(url: string, data: any) {
    return this.httpClient.put(`${this.Base_Url}${this.Api_Name}/${url}`, data, { headers: this.getAuthHeaeders() });
  }

  delete(url: string) {
    return this.httpClient.delete(`${this.Base_Url}${this.Api_Name}/${url}`, { headers: this.getAuthHeaeders() });
  }


  protected getAuthHeaeders(){
    const token = localStorage.getItem('token');
    const headers : HttpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

}
