import { Injectable } from '@angular/core';
import { Etiqueta } from '../models/etiqueta';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pagina } from '../models/pagina';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private DB_PAG:string = "paginas";
  private DB_ETIQUETAS:string = "etiquetas";

  constructor(public db:AngularFirestore) { 
    
  }

  //Pagina service

  listPaginas(){
    return this.db.collection(this.DB_PAG).snapshotChanges();
  }


  addPagina(pagina:Pagina){
    return this.db.collection(this.DB_PAG).add(pagina);
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
    return this.db.firestore.collection(this.DB_ETIQUETAS).where('nombre','==',nombreEtiqueta).get();
  }
  
  get coleccionEtiqueta(){
    return this.db.collection<Etiqueta>(this.DB_ETIQUETAS);
  }
}
