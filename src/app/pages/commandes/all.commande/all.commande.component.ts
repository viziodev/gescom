import { Component } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { CommandeItemWithClient } from '../../../core/models/commande.model';
import { CommandeServiceImpl } from '../../../core/services/impl/commande.service.impl';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all.commande',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all.commande.component.html',
  styleUrl: './all.commande.component.css'
})
export class AllCommandeComponent {
  response?:RestResponse<CommandeItemWithClient[]>

  constructor(private commmandeService:CommandeServiceImpl){

  }

  ngOnInit(): void {
     
      this.refresh()
}

refresh(pageNumber:number=0){
  this.commmandeService.findAll(pageNumber).subscribe(data=>{
    this.response=data
 })
}


paginate(pageNumber:number) {
 this.refresh(pageNumber)
}
}
