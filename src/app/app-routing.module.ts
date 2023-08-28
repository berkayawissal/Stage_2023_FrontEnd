import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MenuComponent} from "./pages/menu/menu.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import { ProfileComponent } from './pages/profile/profile.component';
import { CommandeComponent } from './pages/commande/commande.component';
import { UsersComponent } from './pages/users/users/users.component';
import { LivreurComponent } from './pages/livreurs/livreur/livreur.component';
import { DistributeurComponent } from './pages/distributeurs/distributeur/distributeur.component';
import { PointDeVenteComponent } from './pages/point_de_vente/point-de-vente/point-de-vente.component';
import { EndUserComponent } from './pages/end_users/end-user/end-user.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [ 
{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscrire',
    component: SignupComponent
  },
  {
    path: 'accueil',
    component: MenuComponent
  },
    {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'statistiques',
        component: DashboardComponent
      },
      {
        path: 'commandes',
        component: CommandeComponent

      }, 
      {
        path: 'users',
        component: UsersComponent

      }, 
      {
        path: 'livreurs',
        component: LivreurComponent

      }, 
      {
        path: 'distributeurs',
        component: DistributeurComponent

      }, 
      {
        path: 'pointDeVente',
        component: PointDeVenteComponent

      }, 
      {
        path: 'endUsers',
        component: EndUserComponent

      }, 
      {
        path: 'profile',
        component: ProfileComponent
      }, 
      {
        path: 'setting',
        component: SettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
