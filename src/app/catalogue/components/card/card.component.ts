import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/Shared/models/produit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('cat') cat : Produit|undefined = undefined;
  constructor() { }

  ngOnInit() {}

}
