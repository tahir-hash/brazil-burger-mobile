import { Component } from '@angular/core';
import { TokenService } from './Shared/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private tokenServ: TokenService){
  }
  
   token= this.tokenServ.getData('token')
  
}
