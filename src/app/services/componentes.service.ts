import { Injectable } from '@angular/core';
import { ComponenteTemp } from '../models/componente-temp';

@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor() { }

  getComponentes():ComponenteTemp[]{
    let componentes:any[] = [
      {nombre:'TEXTO',icono:'subject',descripcion:'Añade un texto plano'},
      {nombre:'FOTO',icono:'insert_photo',descripcion:'Insertar una foto del mismo tamño que el contendor'},
      {nombre:'ENLACE',icono:'link',descripcion:'Añade un enlace'},

    ];
    return componentes;
  }
}
