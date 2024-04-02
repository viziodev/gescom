import { Injectable } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';
import { ProduitPanier } from '../../models/produit';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitImplService implements ProduitService {
  private apiUrl=`${environment.apiBaseUrl}/produits`
   constructor(private http:HttpClient) { 
     
   }

  findLibelle(produit: string): Observable<RestResponse<ProduitPanier>> {
    return this.http.get<RestResponse<ProduitPanier>>(`${this.apiUrl}/libelle/${produit}`);
  }
}
