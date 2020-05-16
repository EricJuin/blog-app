import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  cookiesAccepted: string = 'false';
  enlacePoliticaCookies: string = 'https://europa.eu/european-union/abouteuropa/cookies_es';
  constructor(public _cookieS: CookieService) {
  }

  ngOnInit(): void {
    this.cookiesAccepted = this._cookieS.get('cookiesAccepted');
    //this._cookieS.set('cookiesAccepted','false');
  }

  aceptarCookies() {
    this._cookieS.set('cookiesAccepted', 'true');
    this.cookiesAccepted == 'true';
    this.ngOnInit()
  }
}
