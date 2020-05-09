import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Componente } from 'src/app/models/componente';
import { ComponentesService } from 'src/app/services/componentes.service';

@Component({
  selector: 'app-list-componentes',
  templateUrl: './list-componentes.component.html',
  styleUrls: ['./list-componentes.component.css']
})
export class ListComponentesComponent implements OnInit {

  @Output() componenteProp:EventEmitter<Componente> = new EventEmitter();
  listaComponentes = [];//Plantilla de los componentes creados
  constructor(public _compS: ComponentesService) { }

  ngOnInit(): void {
    this.listaComponentes = this._compS.getComponentes();
  }

  addItemPag(item:Componente){
    this.componenteProp.emit(item);
  }

}
