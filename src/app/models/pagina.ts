import { IComponente } from './componente';
import { Usuario } from './usuario';
import { Comentario } from './comentario';
export interface IPagina {
    id?: string;
    titulo: string;
    ultimaEdicion: string;
    creador: string;
    publicada: boolean;
    etiquetas: string[];
    componentes: any[];
    comentarios?: Comentario[];
}
export class Pagina implements IPagina {

    id?: string;
    titulo: string;
    ultimaEdicion: string;
    creador: string;
    publicada = false;
    etiquetas: string[] = [];
    componentes: any[] = [];
    comentarios?: Comentario[] = [];

}
