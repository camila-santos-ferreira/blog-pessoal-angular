import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem {

    public id: number
    public date: Date
    public texto: string
    public titulo: string
    public usuario: Usuario
    public tema: Tema

}