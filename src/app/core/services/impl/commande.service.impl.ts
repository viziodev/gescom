import { Injectable } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Observable } from 'rxjs';
import { CommandeListe } from '../../models/commande.model';
import { RestResponse } from '../../models/rest.response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CommandeServiceImpl implements CommandeService {
  private apiUrl=`${environment.apiBaseUrl}/commandes`
  constructor(private http:HttpClient) { 
     
  }
  findAllByClient(idClient:number,pageNumber:number): Observable<RestResponse<CommandeListe>> {
    return this.http.get<RestResponse<CommandeListe>>(`${this.apiUrl}/client/${idClient}?page=${pageNumber}`);
  }
}
