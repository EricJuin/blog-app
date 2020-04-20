import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-temp-enlace',
  templateUrl: './temp-enlace.component.html',
  styleUrls: ['./temp-enlace.component.css']
})
export class TempEnlaceComponent implements OnInit {

  form:FormGroup;
  @Output() enlaceProp = new EventEmitter<[number,string]>();
  @Input() index:number;//Posicion del componente en el contenido de la página
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      enlace: new FormControl('',{updateOn: "blur"})
    })
    this.form.controls['enlace'].statusChanges.subscribe(
      resp => this.enlaceProp.emit([this.index,this.enlace.value])
    )
  }
  get enlace(){
    return this.form.controls['enlace'];
  }

}
