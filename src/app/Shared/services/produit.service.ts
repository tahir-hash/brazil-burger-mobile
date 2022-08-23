import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {map}  from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Catalogue } from '../models/catalogue';
const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url:string = `${apiUrl}/catalogues`;
  private urlDetails:string = `${apiUrl}/details_produits`;
  private urlMenu:string= `${apiUrl}/menus`

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

  one$=(id:any)=>{
    return this.http.get(`${this.urlDetails}/${id}`)
  }
}
