import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from '../Shared/services/token.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  isLogged:any
  @Output() loggedChanged:EventEmitter<any> = new EventEmitter();
  constructor(private token:TokenService) {
  }

  ngOnInit() {
   /* this.token.getLoggedState().subscribe(data=>{
    this.isLogged =data
    this.loggedChanged.emit(data);
   }); */
   this.isLogged=this.token.isConnect()
    console.log(this.isLogged);
  }

}
