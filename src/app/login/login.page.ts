import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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

  constructor(
    public toastController: ToastController,private fb: FormBuilder,private auth: AuthService, private router: Router ,private token: TokenService) { }

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
        
        this.router.navigateByUrl('/catalogue')
        //console.log("mbacke "+this.token.getData('token')
        this.toastLogin()
      },
      err => {
        console.log(err);
        this.toastLogin('ok')

      }
    )
    console.log(this.form.value)
  }

  async toastLogin(error?:string) {
    if(error){
      const toast = await this.toastController.create({
        message: 'Erreur de connexion',
        duration: 4000,
        color: "danger"
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
      message: 'Connexion Reussie',
      duration: 4000,
      color: "dark"
    });
    toast.present();
    }
    
  }
}
