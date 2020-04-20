import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Multimedia } from 'src/app/models/multimedia';

@Component({
  selector: 'app-form-multimedia',
  templateUrl: './form-multimedia.component.html',
  styleUrls: ['./form-multimedia.component.css']
})
export class FormMultimediaComponent implements OnInit {

  archivos: Multimedia[] = [];

  constructor() { }

  ngOnInit(): void {
     
  }


}
