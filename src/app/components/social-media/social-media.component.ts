import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SocialMedia } from 'src/app/models/social-media';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  socialMedia:SocialMedia[];


  constructor(public _configS:ConfigService,
    public matIconRegistry: MatIconRegistry,
    public domSanitizer: DomSanitizer) {
      this.socialMedia = this._configS.getSocialMedia();

      //Añadimos los iconos previamente creados y subidos a la carpeta assets/logos
      this.matIconRegistry.addSvgIcon(
        "facebook",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logos/logo-facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logos/logo-instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "youtube",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logos/logo-youtube.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logos/logo-twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "linkedin",
        this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logos/logo-linkedin.svg")
      );
     }

  ngOnInit(): void {
    
  }

}
