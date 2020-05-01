import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Componente } from 'src/app/models/componente';

@Component({
  selector: 'app-temp-text',
  templateUrl: './temp-text.component.html',
  styleUrls: ['./temp-text.component.css']
})
export class TempTextComponent implements OnInit {
  form:FormGroup;
  @Output() textoProp = new EventEmitter<[number,Componente]>();
  @Input() index:number;//Posicion del componente en el contenido de la página
  @Input() componente:Componente;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      texto: new FormControl(this.componente.contenido,{updateOn: "blur"})
    })
    this.form.controls['texto'].statusChanges.subscribe(
      resp =>{
        
        this.componente.contenido = this.contenido.value
        this.textoProp.emit([this.index,this.componente])
      } 
    )
  }
  get contenido(){
    return this.form.controls['texto'];
  }

}
