import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Autor from "../modelos/Autor";
import Post from "../modelos/Post";

export default class PostControlador{
    listar(req: Request, res: Response){
        return res.json(posts)
    }

    detalhar(req: Request, res: Response){
        const { id } =req.params

        const post = posts.find((elemento) => {
            return elemento.id === id
        })

        if (!post) {
            return res.status(404).json({
                mensagem: 'a postagem não existe'
            })
        }

        return res.json(post)
    }

    cadastrar(req: Request, res: Response){
       const { titulo, descricao, autorId } = req.body

       if (!titulo || !descricao || !autorId) {
            return res.status(400).json({
                mensagem: 'todos os campos são obrigatórios'
            })
       }

       const autor = autores.find((elemento) => {
            return elemento.id === autorId
       })

       if (!autor){
            return res.status(404).json({
                mensagem: 'o autor não existe'
            })
       }

       const post = new Post ({
            titulo,
            descricao,
            autor
       })

       posts.push(post)

       return res.status(201).json(post)

    }

    editar(req: Request, res: Response){
        

    }

    excluir (req: Request, res: Response){
        
    }
}