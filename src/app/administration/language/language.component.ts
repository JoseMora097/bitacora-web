import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  title = 'bitacora-app';
  langs: string[] = []=[];
  constructor(
    private translate: TranslateService
  ) {
  
    this.translate.setDefaultLang('ENGLISH');
    this.translate.use('');
    this.translate.addLangs(['ENGLISH', 'ESPAÑOL','日本語-JAPONES']);
    this.langs = this.translate.getLangs();
    this.translate.stream('HELLO')
    .subscribe((res: string) => {
      console.log(res);
    });
    this.translate.stream('GREETING', {name: 'nicolas'})
    .subscribe((res: string) => {
      console.log(res);
    });
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

}
