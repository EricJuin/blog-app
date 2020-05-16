import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-temp-video-pagina',
  templateUrl: './temp-video-pagina.component.html',
  styleUrls: ['./temp-video-pagina.component.css']
})
export class TempVideoPaginaComponent implements OnInit {

  @Input() contenido:string;
  constructor(public _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
  }

  getVideoIframe() {
    var video, results;
 
    if (this.contenido=== null) {
        return '';
    }
    results = this.contenido.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? this.contenido : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}


}
