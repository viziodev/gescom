import { Injectable } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Observable } from 'rxjs';
import { CommandeCreate, CommandeItemWithClient, CommandeListe } from '../../models/commande.model';
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
  create(commandeRequest: CommandeCreate): Observable<RestResponse<void>> {
    return this.http.post<RestResponse<void>>(`${this.apiUrl}`,commandeRequest)
  }
  findAll(pageNumber: number): Observable<RestResponse<CommandeItemWithClient[]>> {
    return this.http.get<RestResponse<CommandeItemWithClient[]>>(`${this.apiUrl}?page=${pageNumber}`);
  }
  findAllByClient(idClient:number,pageNumber:number): Observable<RestResponse<CommandeListe>> {
    return this.http.get<RestResponse<CommandeListe>>(`${this.apiUrl}/client/${idClient}?page=${pageNumber}`);
  }
}
