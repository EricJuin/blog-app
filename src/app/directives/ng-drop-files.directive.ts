import { Directive, HostListener, Input } from '@angular/core';
import { Imagen } from '../models/imagen';
import { FileService } from '../services/file.service';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: Imagen[] = [];

  constructor(public _fileS:FileService) { }

  @HostListener('dragover', ['$event']) onMouseEnter($event) {

    this._preventDetention($event);
  }

  @HostListener('drop', ['$event'])
  public onDrop($event: any) {
    const transferencia = this._getTransferencia($event);
    if (!transferencia) {
      return;
    }

    this._extraerArchivos(transferencia.files);
    this._fileS.cargarImagenes(this.archivos);
    this._preventDetention($event);
  }

  private _getTransferencia($event: any) {
    return $event.dataTransfer ? $event.dataTransfer : $event.originalEvent.dataTransfer;
  }

  private _extraerArchivos(listArchivos: FileList) {
    for (const propiedad in Object.getOwnPropertyNames(listArchivos)) {
      const temp = listArchivos[propiedad];
      if (this._puedeSubir(temp)) {
        const archivoNuevo: Imagen = new Imagen(temp);
        let reader = new FileReader();

        reader.readAsDataURL(temp);
        reader.onload = (_event) => {
          archivoNuevo.dataURL = reader.result;
        }
        this.archivos.push(archivoNuevo);
      }
    }

  }

  //Validaciones
  private _puedeSubir(archivo: File): boolean {
    if (!this._archivoExiste(archivo.name) && this._tipoCorrecto(archivo.type)) {
      return true;
    } else {
      return false;
    }
  }

  private _preventDetention($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  private _archivoExiste(nombreArchivo: string): boolean {
    
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        return true;
      }
    }
    return false;
  }

  private _tipoCorrecto(tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }
}
