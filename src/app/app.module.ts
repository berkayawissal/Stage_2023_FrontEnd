import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenuComponent } from './pages/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PageArticlesComponent } from './pages/articles/page-articles.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommandeComponent } from './pages/commande/commande.component';
import { UsersComponent } from './pages/users/users/users.component';
import { LivreurComponent } from './pages/livreurs/livreur/livreur.component';
import { DistributeurComponent } from './pages/distributeurs/distributeur/distributeur.component';
import { PointDeVenteComponent } from './pages/point_de_vente/point-de-vente/point-de-vente.component';
import { EndUserComponent } from './pages/end_users/end-user/end-user.component';
import { SettingComponent } from './pages/setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    PageArticlesComponent,
    ProfileComponent,
    CommandeComponent,
    UsersComponent,
    LivreurComponent,
    DistributeurComponent,
    PointDeVenteComponent,
    EndUserComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}