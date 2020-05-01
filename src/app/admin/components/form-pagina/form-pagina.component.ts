import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Pagina } from '../../../models/pagina';
import { ComponentesService } from '../../../services/componentes.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Componente } from '../../../models/componente';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-pagina',
  templateUrl: './form-pagina.component.html',
  styleUrls: ['./form-pagina.component.css']
})
export class FormPaginaComponent implements OnInit, OnDestroy {

  formPagina: FormGroup;
  pagina: Pagina;
  componentes: Componente[] = [];
  listaComponentes = [];//Plantilla de los componentes creados

  constructor(public _compS: ComponentesService,
    public fb: FormBuilder,
    public _adminS: AdminService,
    public route: Router) {

    if (this._adminS.pagina) {
      this.pagina = this._adminS.pagina;
      this.componentes = this.pagina.componentes;
      this.createForm();
    } else {
      this.pagina = new Pagina();
      this.createForm();
    }
    this.listaComponentes = this._compS.getComponentes();
  }
  ngOnDestroy(): void {
    this._adminS.pagina = null;
  }

  ngOnInit(): void {

  }

  get etiquetas() {
    return this.formPagina.get('etiquetas') as FormArray;
  }
  /**
   * Crea el formulario de la página
   */
  createForm() {
    this.formPagina = this.fb.group({
      titulo: [this.pagina.titulo, [Validators.required, Validators.maxLength(250)]],
      etiquetas: this.fb.array(this.pagina.etiquetas)
    })
  }

  /**
   * Elimina un item del contenido y de la lista de nombres
   */
  deleteItem(i) {
    if (confirm("¿Seguro que quieres borrar el elemento?")) {

      this.componentes.splice(i, 1);

    }
  }

  /**
   * 
   * @param $event Añade una etiqueta que viene del componente form-etiqueta
   * al array de etiquetas
   */
  getEtiqueta($event) {
    switch ($event[1]) {
      case true:

        this.etiquetas.push(this.fb.control($event[0]));
        break;
      case false:
        let index = this.etiquetas.value.indexOf($event[0]);
        this.etiquetas.removeAt(index);
        break;

      default:
        break;
    }
  }

  /**
   * Ver como queda la página
   */
  visualizar() {
    const titulo = this.formPagina.controls['titulo'].value;
    if (titulo !== '') {
      window.open("/publicaciones/" + titulo, "_blank");
    }

  }
  deletePagina() {
    if (confirm("¿Está seguro de borrar la página?")) {
      this._adminS.deletePagina(this.pagina).then(
        resp => {
          this.route.navigate(['/admin']);
        }
      );

    }

  }
  /**
   * Añade una página creada
   */
  addPagina() {
    this.pagina = new Pagina();
    this.pagina = {
      titulo: this.formPagina.controls['titulo'].value,
      creador: null,
      ultimaEdicion: new Date().toDateString(),
      publicada: false,
      etiquetas: this.etiquetas.value,
      componentes: this.componentes
    }

    this._adminS.addPagina(this.pagina).then(
      resp => {
        this.route.navigate(['/admin']);
      }
    );
  }
  /**
   * Actualiza la pagina cargada
   */
  updatePagina() {
    const PagAux: Pagina = {
      id: this.pagina.id,
      titulo: this.formPagina.controls['titulo'].value,
      creador: null,
      ultimaEdicion: new Date().toDateString(),
      publicada: false,
      etiquetas: this.etiquetas.value,
      componentes: this.componentes
    }
    this._adminS.updatePagina(PagAux).then(
      resp => {
        this.route.navigate(['/admin']);
      }
    );
  }

  //Apartado de la modificación/creación de componentes

  /**
 * Ordena la lista o añade un componente a la lista de componentes de la página
 * @param event El coger un elemento para desplazarlo
 */
  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer.id === "cdk-drop-list-1" && event.container.id === "cdk-drop-list-1") {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

    if (event.previousContainer !== event.container) {

      this.componentes.push({ nombre: event.item.data.nombre, contenido: "" });
    }
    if (event.previousContainer.id === "cdk-drop-list-0" && event.container.id === "cdk-drop-list-0") {
      moveItemInArray(this.componentes, event.previousIndex, event.currentIndex);
    }

  }
  /**
   * El event es un array de 2 elemento [0]->posciondel componente [1]-> contenido
   * @param $event evento emitido a la hora de salir del componente texto
   */
  getEventTexto($event) {
    this.componentes[$event[0]] = $event[1]
  }
  /**
   * El event es un array de 2 elemento [0]->poscion del componente [1]-> contenido
   * @param $event evento emitido a la hora de salir del componente enlace
   */
  getEventEnlace($event) {
    this.componentes[$event[0]] = $event[1]
  }
  /**
   * El event es un array de 2 elemento [0]->poscion del componente [1]-> contenido
   * @param $event evento emitido a la hora de salir del componente foto
   */
  getEventFoto($event) {
    this.componentes[$event[0]] = $event[1]
  }

}
