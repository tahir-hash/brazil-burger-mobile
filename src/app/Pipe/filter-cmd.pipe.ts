import { Pipe, PipeTransform } from '@angular/core';
import { CommandeService } from '../Shared/services/commande.service';

@Pipe({
  name: 'filterCmd'
})
export class FilterCmdPipe implements PipeTransform {

  constructor(){}
  
  transform(commandes: any[], filterTxt: string): any {
    if (filterTxt == '') {
      return commandes
    }
    else {
      return commandes.filter((commande) => {
        return commande.etat === filterTxt
      })
    }

  }

}
