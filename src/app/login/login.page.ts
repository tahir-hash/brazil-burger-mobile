import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Login } from '../Shared/models/Auth';
import { Role } from '../Shared/models/Role';
import { AuthService } from '../Shared/services/auth.service';
import { ToastService } from '../Shared/services/toast.service';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  pathImage=environment.pathImage
  form:FormGroup

  constructor(
    private toast:ToastService,private fb: FormBuilder,private auth: AuthService, private router: Router ,private token: TokenService) { }

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
        this.token.saveToken('token',data.token);
        this.token.saveToken('userId',data.id).then(()=>{
         window.location.reload();
        });
        if(this.token.isClient(data.token)){
          this.router.navigateByUrl('/catalogue')
        }
        if(this.token.isLivreur(data.token)){
          this.router.navigateByUrl('/livreur')
        }
        this.toast.toast('Connexion Reussie','dark',4000)
      },
      err => {
        console.log(err);
        this.toast.toast('Erreur de connexion','danger',4000)
      }
    )
    console.log(this.form.value)
  }

}
