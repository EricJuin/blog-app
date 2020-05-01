import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pagina } from '../models/pagina';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private DB_PAG:string = "paginas";

  constructor(public db:AngularFirestore) { }

  listUltimasPaginasPublicadas(){
    return this.db.collection<Pagina>(this.DB_PAG, ref => ref.where('publicada','==',true)).valueChanges();
  }

  getPaginaBytitulo(titulo:string){
    return this.db.collection<Pagina>(this.DB_PAG, ref=> ref.where('titulo','==',titulo).limit(1)).valueChanges();
  }
}
