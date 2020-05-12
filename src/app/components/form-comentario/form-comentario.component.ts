import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Usuario } from '../../models/usuario';
import { Comentario } from '../../models/comentario';
@Component({
  selector: 'app-form-comentario',
  templateUrl: './form-comentario.component.html',
  styleUrls: ['./form-comentario.component.css']
})
export class FormComentarioComponent implements OnInit {

  @Input() paginaId: string;

  constructor(public _bottomSheet: MatBottomSheet,
    public _userS: UserService) { }

  ngOnInit(): void {
  }
  /**
   * Abre el bottomSheet para crear un comentario si el usuario esta registrado
   */
  openBottomSheet(): void {
    if(this._userS.usuario){
      const bottomSheet = this._bottomSheet.open(BottomSheetFormComentario, { data: this.paginaId });
    }else{

    }
    
  }
}

@Component({
  selector: 'bottom-sheet-form-comentario',
  templateUrl: 'bottom-sheet-form-comentario.html',
})
export class BottomSheetFormComentario {

  usuario: Usuario;
  form: FormGroup;
  paginaId: string;

  constructor(public _bottomSheetRef: MatBottomSheetRef<BottomSheetFormComentario>,
    public _userS: UserService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: string) {
    this.paginaId = this.data;
    if (this._userS.usuario) {
      this.usuario = {
        displayName: this._userS.usuario.displayName,
        email: this._userS.usuario.email,
        phoneNumber: this._userS.usuario.phoneNumber,
        photoURL: this._userS.usuario.photoURL,
      }
    }

    this.form = new FormGroup({
      comentario: new FormControl('', Validators.required)
    })
  }

  get comentario() {
    return this.form.get('comentario').value
  }

  enviar(): void {
    if (this.form.valid) {
      const comentario: Comentario = {
        paginaId: this.paginaId,
        comentario: this.form.controls['comentario'].value,
        fecha: new Date().toString(),
        usuario: this.usuario
      }

      this._userS.addComentario(comentario).then(
        resp => {
          this._bottomSheetRef.dismiss()
        }
      )
    }
  }
}