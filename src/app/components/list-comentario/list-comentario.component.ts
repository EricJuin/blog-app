import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Comentario } from '../../models/comentario';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit {

  @Input() paginaId: string;
  comentarios: Observable<Comentario[]>;


  constructor(public _userS: UserService) { }

  ngOnInit(): void {
    if (this.paginaId !== '') {
      this.comentarios = this._userS.listComentarios(this.paginaId).pipe(
        map(
          resp => resp.map(
            d => {
              const data = d.payload.doc.data()
              const id = d.payload.doc.id
              return { id, ...data }
            }
          )
        )
      )
    }

  }



}
