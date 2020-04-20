import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Etiqueta } from '../../../models/etiqueta';
import { AdminService } from '../../../services/admin.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-form-etiqueta',
  templateUrl: './form-etiqueta.component.html',
  styleUrls: ['./form-etiqueta.component.css']
})
export class FormEtiquetaComponent {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  nombreControl = new FormControl();
  etiquetas: Observable<Etiqueta[]>;
  etiquetasSelec: string[] = [];
  allEtiquetas: string[] = [];

  @ViewChild('etiquetaInput') etiquetaInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  //Si el booelan es true quiere decir que se inserta si es false se elimina
  @Output() emisionEtiqueta = new EventEmitter<[string, boolean]>();
  constructor(public _adS: AdminService) {
    this.getEtiquetas();
  }
  /**
   * Añade una etiqueta cuando se escribe en el input
   * @param event 
   */
  add(event: MatChipInputEvent): void {


    const input = event.input;
    const value = event.value;

    // Add our etiqueta
    if ((value || '').trim()) {
      //Comprueba si existe la etiqueta, si no existe la crea
      this._adS.getEtiqueta(value).then(
        docs => {
          if (docs.empty) {
            this._adS.addEtiqueta(value.toLowerCase()).then(
              r => {
                this.emisionEtiqueta.emit([value.trim().toLowerCase(), true])
                this.etiquetasSelec.push(value.trim().toLowerCase());
              }
            );
          } else {
            this.emisionEtiqueta.emit([value.trim().toLowerCase(), true])
            this.etiquetasSelec.push(value.trim().toLowerCase());
          }

        }
      )
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.nombreControl.setValue(null);
  }
  //Elimina una etqiqueta
  remove(etiqueta: string): void {
    const index = this.etiquetasSelec.indexOf(etiqueta);

    if (index >= 0) {
      this.etiquetasSelec.splice(index, 1);
      this.emisionEtiqueta.emit([etiqueta, false])
    }
  }
  /**
   * Añade una etiqueta del auto complete
    */
  selected(event: MatAutocompleteSelectedEvent): void {
    this.etiquetasSelec.push(event.option.viewValue.toLowerCase());
    this.emisionEtiqueta.emit([event.option.viewValue.trim().toLowerCase(), true])
    this.etiquetaInput.nativeElement.value = '';
    this.nombreControl.setValue(null);
  }

  /**
   * Añade las etiquetas creadas previamente al autocomplete
   */
  getEtiquetas() {
    this.etiquetas = this._adS.getEtiquetas().pipe(
      map(
        a => a.map(
          d => {
            const data = d.payload.doc.data() as Etiqueta;
            const id = d.payload.doc.id;
            return { id, ...data };
          }
        )
      )
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allEtiquetas.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }


}
