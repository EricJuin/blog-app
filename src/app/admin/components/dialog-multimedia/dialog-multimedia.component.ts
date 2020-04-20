import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

export interface Item { id?: string, nombre: string, url: string, fechaSubida?: string }

@Component({
  selector: 'app-dialog-multimedia',
  templateUrl: './dialog-multimedia.component.html',
  styleUrls: ['./dialog-multimedia.component.css']
})
export class DialogMultimediaComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(public _fileS: FileService,
    public dialogRef: MatDialogRef<DialogMultimediaComponent>) { }

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
      this.dialogRef.close();
    }

  }

}
