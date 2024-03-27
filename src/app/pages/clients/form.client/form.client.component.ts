import { Component } from '@angular/core';
import { ClientCreateRequest } from '../../../core/models/client';
import { FormsModule } from '@angular/forms';
import { ClientServiceImpl } from '../../../core/services/impl/client.service.impl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form.client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.client.component.html',
  styleUrl: './form.client.component.css'
})
export class FormClientComponent {

  constructor(private clientService:ClientServiceImpl,private router:Router){

  }

   clientCreate:ClientCreateRequest={
     nom:"",
     prenom:"",
     quartier:"",
     telephone:"",
     ville:"",
     numVilla:""
   }

   onSubmit() {
    this.clientService.create(this.clientCreate).subscribe(data=>{
          this.router.navigateByUrl("/clients")
          
    })
  }
}
