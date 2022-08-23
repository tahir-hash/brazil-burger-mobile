import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login, Token } from '../models/Auth';
import { TokenService } from './token.service';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin = `${apiUrl}/login_check`
  private urlRegister = `${apiUrl}/register`



  constructor(private http: HttpClient) {

  }



  login(form: Login) {
    return this.http.post<any>(this.urlLogin, form)
  }

  signIn(form: Login) {
    return this.http.post<any>(this.urlRegister, form)
  }



}
