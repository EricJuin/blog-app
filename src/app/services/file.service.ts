import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Imagen } from '../models/imagen';
import * as firebase from 'firebase/app';
import 'firebase/storage'


@Injectable({
  providedIn: 'root'
})
export class FileService {

  private CARPETA_IMG = "/img";
  imagen="";
  constructor(public db: AngularFirestore) { }
  /**
   * Añade una lista de imagenes a storage de y a database de firestore,
   * si las imagenes existen no las añade
   * @param imagenes lista de imagenes que se quiere añadir a storage y database
   */
  cargarImagenes(imagenes: Imagen[]) {
    const storageRef = firebase.storage().ref();

    for (const imagen of imagenes) {
      imagen.subiendo = true;
      if (imagen.progreso >= 100) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask =
        storageRef.child(this.CARPETA_IMG + '/' + imagen.nombreArchivo)
          .put(imagen.archivo);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => imagen.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir el archivo', error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(
            resp => {
              imagen.url = resp
              imagen.subiendo = false;

              this.getImagenByNombre(imagen.nombreArchivo).then(
                docs => {
                  if (docs.empty) {
                    this.addImagenDatabase({ nombre: imagen.nombreArchivo, url: imagen.url, fechaSubida: new Date().toDateString() });
                  }
                }
              )
            }
          )
        }
      )
    }
  }
  /**
   * Añade un objeto a la colección imagenes de database, es de donde se sacará la url para 
   * mostrar la imagen
   * @param archivo el objeto que se va  a añadir a database de firestore
   */
  addImagenDatabase(archivo: { nombre: string, url: string, fechaSubida: string }) {
    this.db.collection(this.CARPETA_IMG).add(archivo).then();
  }
  /**
     * Devuelve los documentos de la imagen que buscamos por el nombre(si hay)
     * @param nombreEtiqueta el nombre de la etiqueta que buscamos
     */
  getImagenByNombre(nombreImg: string) {
    return this.db.firestore.collection('img').where('nombre', '==', nombreImg).get();
  }

  /**
   * Snapshot de las imagenes que tenemos subida a database
   */
  getImages() {
    return this.db.collection<any>('img').snapshotChanges();
  }
  /**
   * Borra una imagen de database
   * @param idImagen id de la imagen que queremos borrar
   */
  deleteImageDatabase(idImagen: string) {
    return this.db.collection(this.CARPETA_IMG).doc(idImagen).delete();
  }
  /**
   * Borra una imagen de storage
   * @param nombreImagen nombre de la imagen que queremos borrar
   */
  deleteImageStorage(nombreImagen: string) {
    const storageRef = firebase.storage().ref();
    var imagerRef = storageRef.child(this.CARPETA_IMG + "/" + nombreImagen);
    // Delete the file
    imagerRef.delete().then(function () {
      // File deleted successfully
    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });
  }
}
