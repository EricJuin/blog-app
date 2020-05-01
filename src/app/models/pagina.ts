import { IComponente } from './componente';
import { Usuario } from './usuario';
export interface IPagina {
    id?: string;
    titulo: string;
    ultimaEdicion: string;
    creador: Usuario;
    publicada: boolean;
    etiquetas: string[];
    componentes: any[];
}
export class Pagina implements IPagina {

    id?: string;
    titulo: string;
    ultimaEdicion: string;
    creador: Usuario;
    publicada = false;
    etiquetas: string[] = [];
    componentes: any[] = [];

}
