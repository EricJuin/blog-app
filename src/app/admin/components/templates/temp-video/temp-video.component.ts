import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Componente } from 'src/app/models/componente';

@Component({
  selector: 'app-temp-video',
  templateUrl: './temp-video.component.html',
  styleUrls: ['./temp-video.component.css']
})
export class TempVideoComponent implements OnInit {


  form: FormGroup;
  @Output() urlVideoProp = new EventEmitter<[number, Componente]>();
  @Input() index: number;//Posicion del componente
  @Input() componente: Componente;
  imgMiniatura: string;
  constructor() {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      urlVideo: new FormControl(this.componente.contenido, { updateOn: "blur" })
    })
    this.imgMiniatura = this.urlVideo.value;
    this.form.controls['urlVideo'].statusChanges.subscribe(
      resp => {
        
        this.componente.contenido = this.urlVideo.value
        this.urlVideoProp.emit([this.index,this.componente])
      } 
    )

  }

  get urlVideo() {
    return this.form.controls['urlVideo'];
  }


 
}
