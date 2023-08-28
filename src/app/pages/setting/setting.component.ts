import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(public translate: TranslateService){
  
    translate.addLangs(['Anglais', 'Turc','Français']);
    translate.setDefaultLang('Anglais');}

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}


