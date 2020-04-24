import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { id?: string, nombre: string, url: string, fechaSubida?: string }

@Component({
  selector: 'app-list-imagen',
  templateUrl: './list-imagen.component.html',
  styleUrls: ['./list-imagen.component.css']
})
export class ListImagenComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(public _fileS: FileService) { }

  ngOnInit(): void {

    this.items = this._fileS.getImages().pipe(
      map(docs => docs.map(
        doc => {
          let id = doc.payload.doc.id;
          let data = doc.payload.doc.data();
          return { id, ...data }
        }
      ))
    );
  }

  delete(item: Item) {
    if (item) {
      this._fileS.deleteImageDatabase(item.id).then();
      this._fileS.deleteImageStorage(item.nombre);
      this._fileS.imagen = null;
    }

  }

}
