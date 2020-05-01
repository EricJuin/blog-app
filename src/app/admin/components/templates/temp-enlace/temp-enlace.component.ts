import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Componente } from 'src/app/models/componente';

@Component({
  selector: 'app-temp-enlace',
  templateUrl: './temp-enlace.component.html',
  styleUrls: ['./temp-enlace.component.css']
})
export class TempEnlaceComponent implements OnInit {

  form: FormGroup;
  @Output() enlaceProp = new EventEmitter<[number, Componente]>();
  @Input() index: number;//Posicion del componente en el contenido de la página
  @Input() componente: Componente;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      enlace: new FormControl(this.componente.contenido, { updateOn: "blur" })
    })
    this.form.controls['enlace'].statusChanges.subscribe(
      resp => {

        this.componente.contenido = this.enlace.value
        this.enlaceProp.emit([this.index, this.componente])
      }
    )
  }
  get enlace() {
    return this.form.controls['enlace'];
  }

}
