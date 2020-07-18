import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html',
  styleUrls: ['./password-recover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  title = 'bitacora-app';
  langs: string[] = [];
  constructor(
    private translate: TranslateService
  ) {
  
  this.translate.setDefaultLang('ENGLISH');
    this.translate.use('');
    this.translate.addLangs(['ENGLISH', 'ESPAÑOL','日本語-JAPONES',]);
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