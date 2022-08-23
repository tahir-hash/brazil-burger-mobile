import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../Shared/models/Auth';
import { Role } from '../Shared/models/Role';
import { AuthService } from '../Shared/services/auth.service';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pathImage=environment.pathImage
  form:FormGroup

  constructor(private fb: FormBuilder,private auth: AuthService, private router: Router ,private token: TokenService) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: [null, Validators.required],
      password:[null, Validators.required],
    })
  }
  get login(){return this.form.get('login')}
  get password(){return this.form.get('password')}

  submitData() {
    this.auth.login(this.form.value).subscribe(
      data => {
        this.token.saveToken(data.token);
        localStorage.setItem('userId', data.id)
        this.router.navigate(['/catalogue']);
      },
      err => {
        console.log(err);
      }
    )
    console.log(this.form.value)
  }
}
