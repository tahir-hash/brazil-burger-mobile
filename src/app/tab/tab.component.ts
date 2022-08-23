import { Component, OnInit } from '@angular/core';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  isLogged:boolean
  constructor(private token:TokenService) {
  }

  ngOnInit() {
    this.isLogged = this.token.isConnect();
    console.log(this.isLogged);
  }

}
