import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {map}  from 'rxjs/operators';
import { Catalogue } from './models/catalogue';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url:string = "https://tahirbrazilburger.herokuapp.com/api/catalogues";
  private urlDetails:string = "https://tahirbrazilburger.herokuapp.com/api/details_produits";
  private urlMenu:string= "https://tahirbrazilburger.herokuapp.com/api/menus"

  constructor(private http: HttpClient) { }

  all$= (): Observable<Catalogue> =>{
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        let catalogue: Catalogue={
          burgers: data['hydra:member'][0]['burgers'],
          menus: data['hydra:member'][1]['menus'],
        }
        data.getAll=[...catalogue.burgers,...catalogue.menus]
        data.menus=[...catalogue.menus]
        return data;
      })
    )
  }
}
