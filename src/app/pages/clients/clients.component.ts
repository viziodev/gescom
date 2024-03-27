import { Component, OnInit } from '@angular/core';
import { ClientServiceImpl } from '../../core/services/impl/client.service.impl';
import { RestResponse } from '../../core/models/rest.response';
import { ClientListe } from '../../core/models/client';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {

   //response:RestResponse<ClientListe[]>|null=null
   response?:RestResponse<ClientListe[]>
     constructor(private clientService:ClientServiceImpl){

     }
    ngOnInit(): void {
       this.refresh()    
    }

    refresh(pageNumber:number=0){
        this.clientService.findAll(pageNumber).subscribe(data=>{
        this.response=data
       })
    }


    paginate(pageNumber:number) {
       this.refresh(pageNumber)
    }
    
}
