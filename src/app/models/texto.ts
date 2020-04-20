import { IComponente } from './componente';
export interface ITexto extends IComponente{
    texto:string;
}
export class Texto implements ITexto{
    texto: string;
    id?: string;
    nombre: string;
    orden: number;

}
