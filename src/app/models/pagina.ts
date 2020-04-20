import { IComponente } from './componente';
import { Usuario } from './usuario';
export interface IPagina {
    id?: string;
    url: string;
    titulo: string;
    fechaCreacion: string;
    creador: Usuario;
    publicada: boolean;
    etiquetas: string[];
    componentes: IComponente[];
}
export class Pagina implements IPagina {

    id?: string;
    url: string;
    titulo: string;
    fechaCreacion: string;
    creador: Usuario;
    publicada = false;
    etiquetas: string[] = [];
    componentes: IComponente[] = [];

}
