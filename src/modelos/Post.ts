import { v4 as uuidv4 } from 'uuid'
import Autor from './Autor'

type TPost = {
    titulo: string
    descricao: string
    autor: Autor
}

export default class Post {
    readonly id: string
    titulo: string
    descricao: string
    autor: Autor
    dataCriacao: Date

    constructor(post: TPost){
        this.id = this.gerarId()
        this.titulo = post.titulo
        this.descricao = post.descricao
        this.autor = post.autor
        this.dataCriacao = new Date()
    }

    private gerarId(): string{
        return uuidv4()
    }
}