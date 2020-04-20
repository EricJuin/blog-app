import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-temp-text',
  templateUrl: './temp-text.component.html',
  styleUrls: ['./temp-text.component.css']
})
export class TempTextComponent implements OnInit {
  form:FormGroup;
  @Output() textoProp = new EventEmitter<[number,string]>();
  @Input() index:number;//Posicion del componente en el contenido de la página
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      texto: new FormControl('',{updateOn: "blur"})
    })
    this.form.controls['texto'].statusChanges.subscribe(
      resp => this.textoProp.emit([this.index,this.texto.value])
    )
  }
  get texto(){
    return this.form.controls['texto'];
  }

}
