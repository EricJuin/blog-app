import { Injectable } from '@angular/core';
import { ComponenteTemp } from '../models/componente-temp';
import { SocialMedia } from '../models/social-media';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  
  /**
   * Aqui creamos los componentes que queremos diseñar para que aparezcan en la lista de componentes.
   * Le ponemos un nombre al componente un icono (estos iconos vienen de angular icons) y una descipción
   */
  getComponentes():ComponenteTemp[]{
    let componentes:any[] = [
      {nombre:'TEXTO',icono:'subject',descripcion:'Añade un texto plano'},
      {nombre:'FOTO',icono:'insert_photo',descripcion:'Insertar una foto del mismo tamño que el contendor'},
      {nombre:'ENLACE',icono:'link',descripcion:'Añade un enlace'},
      {nombre:'VIDEO',icono:'slideshow',descripcion:'Añade un video a partir de un enlace'},

    ];
    return componentes;
  }

  /**
   * Creamos las redes sociales que queremos añadir a nuestro componente de social media
   * Antes de desplegar la aplicación hay que poner las urls que nos interesa (las de nuestras redes sociales)
   */
  getSocialMedia():SocialMedia[]{
    return [
      {nombre:'facebook',url:'https://www.facebook.com',icono:'facebook'},
      {nombre:'instagram',url:'https://www.instagram.com',icono:'instagram'},
      {nombre:'youtube',url:'https://www.youtube.com',icono:'youtube'},
      {nombre:'twitter',url:'https://www.twitter.com',icono:'twitter'},
      {nombre:'linkedin',url:'https://www.linkedin.com',icono:'linkedin'},
    ]
    
  }
}
