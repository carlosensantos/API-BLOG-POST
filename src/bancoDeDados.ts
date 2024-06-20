import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores: Autor[] = []
export const posts: Post[] = [
    new Post ({
        titulo: 'meu primeiro post',
        descricao: 'descrição do post',
        autor: new Autor ({
            nome: 'carlos',
            idade: 33
        })
    })
]