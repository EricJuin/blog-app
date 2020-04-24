export class Imagen{
    archivo:File;
    nombreArchivo:string;
    url:string;
    subiendo?:boolean;
    progreso?:number;
    dataURL:any;

    constructor(archivo:File){
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.subiendo =false;
        this.progreso = 0;
    }
}