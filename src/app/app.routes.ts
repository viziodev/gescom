import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
   
    {
        path:"clients",
        component:ClientsComponent
    },
    {
        path:"commandes",
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
