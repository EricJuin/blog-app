import { Usuario } from './usuario';
export interface IComentario {
    id?: string;
    paginaId:string;
    usuario: Usuario;
    fecha: string;
    comentario: string;
}

export class Comentario implements IComentario {
    id?: string;
    paginaId:string;
    usuario: Usuario;
    fecha: string;
    comentario: string;
}
