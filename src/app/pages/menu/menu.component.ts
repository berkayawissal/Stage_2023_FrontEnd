
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import jwtDecode from 'jwt-decode';

interface DecodedToken {
  sub: string;
  // Autres champs du jeton si nécessaires
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  token = JSON.parse(localStorage.getItem("accesstoken")!)
  
  tokenValid = { access_token: 'votre-jeton-jwt-ici' }; // Remplacez par votre propre jeton

  userEmail: string;

  constructor(public translate: TranslateService){
  
      translate.addLangs(['en', 'nl']);
      translate.setDefaultLang('en');
    
    const decodedToken = jwtDecode(this.token.access_token) as DecodedToken;
    this.userEmail = decodedToken.sub || "ADMIN";
  }

  ngOnInit(): void {

    // console.log(this.authService.getUserRole())

  }
  logout(){
    localStorage.removeItem("accesstoken");
    window.location.reload();
    
   }
  
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
