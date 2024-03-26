import { Component, OnInit } from '@angular/core';
import { ClientServiceImpl } from '../../core/services/impl/client.service.impl';
import { RestResponse } from '../../core/models/rest.response';
import { ClientListe } from '../../core/models/client.liste';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
   //response:RestResponse<ClientListe[]>|null=null
   response?:RestResponse<ClientListe[]>
     constructor(private clientService:ClientServiceImpl){

     }
    ngOnInit(): void {
         this.clientService.findAll().subscribe(data=>{
            this.response=data
            console.log(data);
         })
    }
    
}
