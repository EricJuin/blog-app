import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor() { }

  getComponentes():any[]{
    let componentes:any[] = [
      {tipo:'TEXTO',icono:'subject'},
      {tipo:'FOTO',icono:'insert_photo'},
      {tipo:'ENLACE',icono:'link'},

    ];
    return componentes;
  }
}
