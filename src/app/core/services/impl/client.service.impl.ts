import { Injectable } from '@angular/core';
import { ClientService } from '../client.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientListe } from '../../models/client.liste';
import { RestResponse } from '../../models/rest.response';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceImpl implements ClientService{
  constructor(private http:HttpClient) { 
     
  }
  findAll(): Observable<RestResponse<ClientListe[]>> {
        return this.http.get<RestResponse<ClientListe[]>>("http://localhost:9000/api/gescom/clients/paginate");
  }
}
