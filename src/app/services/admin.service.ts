import { Injectable } from '@angular/core';
import { Etiqueta } from '../models/etiqueta';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pagina } from '../models/pagina';
import { SocialMedia } from '../models/social-media';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private DB_PAG: string = "paginas";
  private DB_ETIQUETAS: string = "etiquetas";
  private DB_SOCIALMEDIA:string = "socialMedia";

  EMAIL_ADMIN:string[] = ["ericpalmeral@gmail.com"];//Configurar antes de poner en 

  pagina: Pagina;

  constructor(public db: AngularFirestore) {

  }

  //Pagina service

  listPaginas() {
    return this.db.collection(this.DB_PAG).snapshotChanges();
  }


  addPagina(pagina: Pagina) {
    return this.db.collection(this.DB_PAG).add(pagina);
  }

  updatePagina(paginaId:string,pagina: Pagina) {
    return this.db.doc(this.DB_PAG + "/" + paginaId).update(pagina);
  }

  cambioEstadoPublicada(pagina:Pagina,estado:boolean){
    return this.db.collection(this.DB_PAG).doc(pagina.id).update({publicada:estado});
  }

  deletePagina(pagina:Pagina){
    return this.db.doc(this.DB_PAG + "/" + pagina.id).delete();
  }

  getPaginaByTitulo(titulo: string) {
    return this.db.firestore.collection(this.DB_PAG).where('titulo', '==', titulo).get();
  }
  //Etiqueta service
  /**
   * Añade una etiqueta en la base de datos
   * @param etiqueta etiqueta que se va añadir
   */
  addEtiqueta(etiqueta: string) {
    let aux: Etiqueta = {
      nombre: etiqueta
    }
    return this.coleccionEtiqueta.add(aux);
  }

  /**
   * Devueleve todas las etiquetas que hay en la base de datos
   */
  getEtiquetas() {
    return this.coleccionEtiqueta.snapshotChanges();
  }
  /**
   * Devuelve los documentos de la etiqueta que buscamos por el nombre(si hay)
   * @param nombreEtiqueta el nombre de la etiqueta que buscamos
   */
  getEtiqueta(nombreEtiqueta: string) {
    return this.db.firestore.collection(this.DB_ETIQUETAS).where('nombre', '==', nombreEtiqueta).get();
  }

  get coleccionEtiqueta() {
    return this.db.collection<Etiqueta>(this.DB_ETIQUETAS);
  }

}
