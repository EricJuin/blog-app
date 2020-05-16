import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Componente } from 'src/app/models/componente';
import { ConfigService } from '../../../services/config.service';

@Component({
  selector: 'app-list-componentes',
  templateUrl: './list-componentes.component.html',
  styleUrls: ['./list-componentes.component.css']
})
export class ListComponentesComponent implements OnInit {

  @Output() componenteProp:EventEmitter<Componente> = new EventEmitter();
  listaComponentes = [];//Plantilla de los componentes creados
  constructor(public _configS:ConfigService) { }

  ngOnInit(): void {
    this.listaComponentes = this._configS.getComponentes();
  }

  addItemPag(item:Componente){
    this.componenteProp.emit(item);
  }

}
