import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormClientComponent } from './pages/clients/form.client/form.client.component';
import { AllCommandeComponent } from './pages/commandes/all.commande/all.commande.component';
import { FormCommandeComponent } from './pages/commandes/form.commande/form.commande.component';

export const routes: Routes = [
   
    {
        path:"clients",
        children:[
            {
                path:"",
                component:ClientsComponent,
            },
            {
                    path:"form",
                    component:FormClientComponent
            },
        ]
     },
     {
        path:"cmde-all",
         component:AllCommandeComponent
     }, 
     {
        path:"cmde-form",
         component:FormCommandeComponent
     },
    {
         path:"commandes/:id",
          component:CommandesComponent
    },
    {
      path:"",
      redirectTo:"/clients",
      pathMatch:"full"
    },
    {
        path:"**",
        component:PageNotFoundComponent
     },
    
];
