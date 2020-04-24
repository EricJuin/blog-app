import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { Pagina } from '../../../models/pagina';
import { ComponentesService } from '../../../services/componentes.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Componente } from '../../../models/componente';
import { AdminService } from '../../../services/admin.service';


@Component({
  selector: 'app-form-pagina',
  templateUrl: './form-pagina.component.html',
  styleUrls: ['./form-pagina.component.css']
})
export class FormPaginaComponent implements OnInit {


  componentes = [];
  nombreComponentes = [];
  formPagina: FormGroup;
  pagina: Pagina = new Pagina();
  listaComponentes = [];//Plantilla de los componentes creados

  constructor(public _compS: ComponentesService, public fb: FormBuilder, public _adminS:AdminService) {
    this.componentes = this._compS.getComponentes();
    this.createForm();
    this.listaComponentes = this._compS.getComponentes();
  }

  get contenido() {
    return this.formPagina.get('contenido') as FormArray;
  }

  get etiquetas() {
    return this.formPagina.get('etiquetas') as FormArray;
  }

  createForm() {
    this.formPagina = this.fb.group({
      url: [this.pagina.url, [Validators.required]],
      titulo: [this.pagina.titulo, [Validators.required]],
      etiquetas: this.fb.array([]),
      contenido: this.fb.array([])
    })
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

  }
  /**
   * Añade una página creada
   */
  addPagina() {
    this.pagina = new Pagina();
    this.pagina = {
      titulo: this.formPagina.controls['titulo'].value,
      creador: null,
      url: this.formPagina.controls['url'].value,
      fechaCreacion: new Date().toDateString(),
      publicada: false,
      etiquetas: this.etiquetas.value,
      componentes: []
    }

    this.nombreComponentes.forEach((element,i) => {
      let compPagina:Componente = {
        nombre:element,
        contenido:this.contenido.value[i]
      }
      this.pagina.componentes.push(compPagina)
    });
    this._adminS.addPagina(this.pagina);
  }

  ngOnInit(): void {


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
      this.returnComp(event.item.data.tipo);
    }
    if (event.previousContainer.id === "cdk-drop-list-0" && event.container.id === "cdk-drop-list-0") {

      moveItemInArray(this.nombreComponentes, event.previousIndex, event.currentIndex);
      moveItemInArray(this.contenido.controls, event.previousIndex, event.currentIndex);
      moveItemInArray(this.contenido.value, event.previousIndex, event.currentIndex);

    }

  }

  /**
 * Crea un componente segun el tipo que le inyectamos, el componente
 * debe de estar previamente creado en el servicio Componentes
 * y lo tenemos que añadir aqui, tambien hay que crear una plantilla
 * en admin/components/templates para añadirla dentro del switch
 * en form-pagina.html dentro
 * @param nombre El tipo de componente que vamos a crear
 */
  returnComp(nombre: string) {
    switch (nombre) {
      case "TEXTO":
        this.nombreComponentes.push(nombre);
        this.contenido.push(this.fb.control(''));
        break;
      case "ENLACE":
        this.nombreComponentes.push(nombre);
        this.contenido.push(this.fb.control(''));
        break;
      case "FOTO":
        this.nombreComponentes.push(nombre);
        this.contenido.push(this.fb.control(''));
        break;
      default:
        break;
    }
  }

  /**
   * El event es un array de 2 elemento [0]->posciondel componente [1]-> contenido
   * @param $event evento emitido a la hora de salir del componente texto
   */
  getEventTexto($event) {
    this.contenido.at($event[0]).setValue($event[1]);
  }
  /**
   * El event es un array de 2 elemento [0]->poscion del componente [1]-> contenido
   * @param $event evento emitido a la hora de salir del componente enlace
   */
  getEventEnlace($event) {
    this.contenido.at($event[0]).setValue($event[1]);
  }
  /**
   * El event es un array de 2 elemento [0]->poscion del componente [1]-> contenido
   * @param $event evento emitido a la hora de salir del componente foto
   */
  getEventFoto($event) {
    this.contenido.at($event[0]).setValue($event[1]);
  }

}
