import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagina } from 'src/app/models/pagina';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-mini-publicaciones',
  templateUrl: './list-mini-publicaciones.component.html',
  styleUrls: ['./list-mini-publicaciones.component.css']
})
export class ListMiniPublicacionesComponent implements OnInit {

  publicaciones: Observable<Pagina[]>;

  constructor(public _userS: UserService, public route: Router) { }

  ngOnInit(): void {
    this.listUltimasPublicaciones();
  }

  listUltimasPublicaciones() {
    this.publicaciones = this._userS.listUltimasPaginasPublicadas().pipe(
      map( docs => docs.map(
        doc =>{
          const data = doc.payload.doc.data();
          const id = doc.payload.doc.id;
          return {id,...data} as Pagina
        }
      ))

    )
  }

  getFotoPublicacion(pagina: Pagina): string {
    let urlFoto = "";

    pagina.componentes.forEach(element => {
      if (element.nombre === "FOTO") {
        urlFoto = element.contenido;
        return;
      }
    });

    return urlFoto;
  }

  verPublicacion(pagina: Pagina) {
    if (pagina.titulo) {
      this.route.navigate(['/publicaciones/', pagina.titulo])
    }

  }
}
