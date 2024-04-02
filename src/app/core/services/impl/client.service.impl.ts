import { Injectable } from '@angular/core';
import { ClientService } from '../client.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientCreateRequest, ClientListe } from '../../models/client';
import { RestResponse } from '../../models/rest.response';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceImpl implements ClientService{
  private apiUrl=`${environment.apiBaseUrl}/clients`
  constructor(private http:HttpClient) { 
     
  }

  findTel(tel: string): Observable<RestResponse<ClientListe>> {
    return this.http.get<RestResponse<ClientListe>>(`${this.apiUrl}/tel/${tel}`);
  }
 
  findAll(pageNumber:number): Observable<RestResponse<ClientListe[]>> {
        return this.http.get<RestResponse<ClientListe[]>>(`${this.apiUrl}/paginate?page=${pageNumber}`);
  }

  create(clientRequest: ClientCreateRequest): Observable<RestResponse<ClientListe>> {
      return this.http.post<RestResponse<ClientListe>>(`${this.apiUrl}`,clientRequest)
  }
}
