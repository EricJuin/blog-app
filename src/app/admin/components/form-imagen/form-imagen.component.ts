import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Imagen } from 'src/app/models/imagen';
import { FormGroup, FormControl } from '@angular/forms';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-form-imagen',
  templateUrl: './form-imagen.component.html',
  styleUrls: ['./form-imagen.component.css']
})
export class FormImagenComponent implements OnInit {

  archivos: Imagen[] = [];
  form:FormGroup;
  constructor(public _fileS:FileService) {
    this.form = new FormGroup({
      inputImg : new FormControl()
    })
   }

  ngOnInit(): void {
  }

  get inputImg(){
    return this.form.controls['inputImg'];
  }

}
