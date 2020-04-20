import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../../../../services/file.service';
import { DialogMultimediaComponent } from '../../dialog-multimedia/dialog-multimedia.component';

@Component({
  selector: 'app-temp-foto',
  templateUrl: './temp-foto.component.html',
  styleUrls: ['./temp-foto.component.css']
})
export class TempFotoComponent implements OnInit {

  form: FormGroup;
  @Output() urlFotoProp = new EventEmitter<[number, string]>();
  @Input() index: number;//Posicion del componente
  imgMiniatura: string;
  constructor(public dialog: MatDialog, public _fileS: FileService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      urlFoto: new FormControl(this._fileS.imagen, { updateOn: "blur" })
    })
    this.form.controls['urlFoto'].statusChanges.subscribe(
      resp => this.urlFotoProp.emit([this.index, this.urlFoto.value])
    )
    this.dialog.afterAllClosed.subscribe(
      resp => {
        this.urlFoto.setValue(this._fileS.imagen)
        this.imgMiniatura = this._fileS.imagen
      }
    );
  }

  get urlFoto() {
    return this.form.controls['urlFoto'];
  }

  abrirGaleriaFoto() {
    this.dialog.open(DialogMultimediaComponent);
  }
} 
