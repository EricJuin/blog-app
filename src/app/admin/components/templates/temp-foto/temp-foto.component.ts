import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileService } from '../../../../services/file.service';
import { DialogImagenComponent } from '../../dialog-imagen/dialog-imagen.component';
import { from } from 'rxjs';
import { Componente } from 'src/app/models/componente';

@Component({
  selector: 'app-temp-foto',
  templateUrl: './temp-foto.component.html',
  styleUrls: ['./temp-foto.component.css']
})
export class TempFotoComponent implements OnInit {

  form: FormGroup;
  @Output() urlFotoProp = new EventEmitter<[number, Componente]>();
  @Input() index: number;//Posicion del componente
  @Input() componente: Componente;
  imgMiniatura: string;
  constructor(public dialog: MatDialog, public _fileS: FileService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      urlFoto: new FormControl(this.componente.contenido, { updateOn: "blur" })
    })
    this.imgMiniatura = this.urlFoto.value;
    this.form.controls['urlFoto'].statusChanges.subscribe(
      resp => {
        
        this.componente.contenido = this.urlFoto.value
        this.urlFotoProp.emit([this.index,this.componente])
      } 
    )

  }

  get urlFoto() {
    return this.form.controls['urlFoto'];
  }


  abrirGaleriaFoto() {
    const dialogRef = this.dialog.open(DialogImagenComponent);
    dialogRef.afterClosed().subscribe(
      resp => {
        this.urlFoto.setValue(resp)
        this.imgMiniatura = this.urlFoto.value
      }
    );
  }
} 
