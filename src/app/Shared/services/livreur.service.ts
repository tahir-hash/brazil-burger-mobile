import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http:HttpClient) { }

  livraison(id:number,token:any,etat:string) {
    const url = `https://tahirbrazilburger.herokuapp.com/api/livraisons?etat=${etat}&livreur=${id}`;
      const headersOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      }
      console.log(headersOptions)
      return this.http.get<any>(url, headersOptions).pipe(
        map(data => {
          return data['hydra:member']
        })
      )
    }
}
