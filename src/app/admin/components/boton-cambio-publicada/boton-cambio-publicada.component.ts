import { Component, OnInit, Input } from '@angular/core';
import { Pagina } from '../../../models/pagina';
import { AdminService } from '../../../services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-boton-cambio-publicada',
  templateUrl: './boton-cambio-publicada.component.html',
  styleUrls: ['./boton-cambio-publicada.component.css']
})
export class BotonCambioPublicadaComponent implements OnInit {

  @Input() pagina:Pagina;
  form:FormGroup;
  constructor(public _adminS:AdminService) { 
    this.form = new FormGroup({
      publicada: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.form.controls['publicada'].setValue(this.pagina.publicada);
    this.form.controls['publicada'].valueChanges.subscribe(
      resp => this.cambioEstado(resp)
    );
  }

  cambioEstado(estado:boolean){
    this._adminS.cambioEstadoPublicada(this.pagina,estado).then()
  }

}
