import { Injectable } from '@angular/core';
import { Etiqueta } from '../models/etiqueta';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, flatMap, tap } from 'rxjs/operators';
import { Pagina } from '../models/pagina';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(public db:AngularFirestore) { 
    
  }

  //Pagina service
  addPagina(pagina:Pagina){
    return this.db.collection('paginas').add(pagina);
  }

  
  //Etiqueta service
  /**
   * Añade una etiqueta en la base de datos
   * @param etiqueta etiqueta que se va añadir
   */
  addEtiqueta(etiqueta:string){
    let aux:Etiqueta = {
      nombre:etiqueta
    }
    return this.coleccionEtiqueta.add(aux);
  }

  /**
   * Devueleve todas las etiquetas que hay en la base de datos
   */
  getEtiquetas(){
    return this.coleccionEtiqueta.snapshotChanges();
  }
  /**
   * Devuelve los documentos de la etiqueta que buscamos por el nombre(si hay)
   * @param nombreEtiqueta el nombre de la etiqueta que buscamos
   */
  getEtiqueta(nombreEtiqueta:string){
    return this.db.firestore.collection('etiquetas').where('nombre','==',nombreEtiqueta).get();
  }
  
  get coleccionEtiqueta(){
    return this.db.collection<Etiqueta>("etiquetas");
  }
}
