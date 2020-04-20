import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { id?: string, nombre: string, url: string, fechaSubida?: string }

@Component({
  selector: 'app-list-multimedia',
  templateUrl: './list-multimedia.component.html',
  styleUrls: ['./list-multimedia.component.css']
})
export class ListMultimediaComponent implements OnInit {

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
  selectItem(item) {
    if (item) {
      this._fileS.imagen = item.url;
      
    }

  }
  delete(item: Item) {
    if (item) {
      this._fileS.deleteImageDatabase(item.id).then(
        resp => console.log(resp)
      );
      this._fileS.deleteImageStorage(item.nombre);
    }

  }

}
