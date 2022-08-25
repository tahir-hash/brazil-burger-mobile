import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  isLogged: any

  @Output() loggedChanged: EventEmitter<any> = new EventEmitter();
  constructor(private token: TokenService) {
  }

 async ngOnInit() {
  
    this.token.getData('token').then((data) => {
      if (data != null) {
        this.isLogged = true
      }
      else {
        this.isLogged = false
      }
      //console.log(this.isLogged);
    })
  }
  logOut() {
    this.token.logOut();
    //this.router.navigateByUrl('/catalogue');
  }
}
