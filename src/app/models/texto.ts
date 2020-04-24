import { IComponente } from './componente';
export interface ITexto extends IComponente{
    texto:string;
}
export class Texto implements ITexto{
    contenido: string;
    texto: string;
    id?: string;
    nombre: string;
    orden: number;

}
