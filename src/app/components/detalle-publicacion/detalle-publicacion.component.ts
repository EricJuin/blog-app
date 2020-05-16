import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Pagina } from '../../models/pagina';

@Component({
  selector: 'app-detalle-publicacion',
  templateUrl: './detalle-publicacion.component.html',
  styleUrls: ['./detalle-publicacion.component.css']
})
export class DetallePublicacionComponent implements OnInit {

  @Input() pagina:Pagina;

  constructor(public _userS:UserService,public actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPagina();
  }

  getPagina(){
    let titulo = this.actRoute.snapshot.paramMap.get('titulo');
    if(titulo){
      this._userS.getPaginaBytitulo(titulo).subscribe(
        resp => {
          
          this.pagina = resp[0] 
        }
      )
    }
    
  }

}
