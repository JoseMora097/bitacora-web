import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitacora-app';
  langs: string[] = [];
  
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('ESPAÑOL');
    this.translate.use('ESPAÑOL');
    this.translate.addLangs(['Select language','ENGLISH', 'ESPAÑOL','DEUTSCHE-ALEMAN','普通话-MANDARIN']);
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
}
