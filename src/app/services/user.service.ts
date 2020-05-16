import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pagina } from '../models/pagina';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminService } from './admin.service';
import { Comentario } from '../models/comentario';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private DB_PAG: string = "paginas";
  private DB_COMENTARIO: string = "comentarios";
  //private DB_USER: string = "users";
  usuario;

  constructor(public db: AngularFirestore,
    public auth: AngularFireAuth,
    public _adminS: AdminService) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.usuario = user
        localStorage.setItem('user', JSON.stringify(this.usuario));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  /**
   * Comprueba si un usuario esta loggeado o no
   */
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  /**
   * Devuelve el usuario que está guardado en localstorage
   */
  get user() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }
  /**
   * Comprueba si el usuario es administrador
   */
  isAdmin() {
    if (this.user) {
      if (this._adminS.EMAIL_ADMIN.includes(this.user.email)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Cierra la sesión del usuario
   */
  signOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.usuario = null
    })
  }
  /**
   * Lista las ultimas páginas publicadas
   */
  listUltimasPaginasPublicadas() {
    return this.db.collection<Pagina>(this.DB_PAG, ref => ref.where('publicada', '==', true)).snapshotChanges();
  }
  /**
   * Busca una página por su título
   * @param titulo el título de la págia que queremos buscar
   */
  getPaginaBytitulo(titulo: string) {
    return this.db.collection<Pagina>(this.DB_PAG, ref => ref.where('titulo', '==', titulo).limit(1)).valueChanges();
  }

  //Parte de comentarios

  /**
   * Añade un comentario a la colección de comentarios
   * @param comentario el comentario que se va añadir
   */
  addComentario(comentario: Comentario) {
    return this.db.collection<Comentario>(this.DB_COMENTARIO).add(comentario);
  }
  /**
   * Lista los comentarios de una página
   * @param paginaId el id de la página  de la que vamos a sacar los comentarios
   */
  listComentarios(paginaId: string) {
    return this.db.collection<Comentario>(this.DB_COMENTARIO, ref => ref.where('paginaId', '==', paginaId)).snapshotChanges();
  }

}
