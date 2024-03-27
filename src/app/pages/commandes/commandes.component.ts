import { Component, OnInit } from '@angular/core';
import {  } from '../../core/services/commande.service';
import { CommandeServiceImpl } from '../../core/services/impl/commande.service.impl';
import { CommandeListe } from '../../core/models/commande.model';
import { RestResponse } from '../../core/models/rest.response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commandes',
  standalone: true,
  imports: [],
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.css'
})
export class CommandesComponent implements OnInit {
  response?:RestResponse<CommandeListe>
  private idClient!:string|null
  constructor(private commmandeService:CommandeServiceImpl
    ,private route:ActivatedRoute){

  }

  ngOnInit(): void {
      this.idClient= this.route.snapshot.paramMap.get("id")
      this.refresh()
}

refresh(pageNumber:number=0){
  this.commmandeService.findAllByClient(Number.parseInt(this.idClient!),pageNumber).subscribe(data=>{
    this.response=data
 })
}


paginate(pageNumber:number) {
 this.refresh(pageNumber)
}

}
