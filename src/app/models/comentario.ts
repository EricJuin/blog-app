import { Usuario } from './usuario';
export interface IComentario {
    id?: string;
    usuario: Usuario;
    fecha: string;
    comentario: string;
    respuestas: Comentario[];
}

export class Comentario implements IComentario {
    id?: string;
    usuario: Usuario;
    fecha: string;
    comentario: string;
    respuestas: Comentario[] = [];
}
