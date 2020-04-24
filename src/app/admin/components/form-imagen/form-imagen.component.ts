import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-form-imagen',
  templateUrl: './form-imagen.component.html',
  styleUrls: ['./form-imagen.component.css']
})
export class FormImagenComponent implements OnInit {

  archivos: Imagen[] = [];

  constructor() { }

  ngOnInit(): void {

  }


}
