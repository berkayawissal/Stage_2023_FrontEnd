import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private languageService: LanguageService) {}

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }
}


