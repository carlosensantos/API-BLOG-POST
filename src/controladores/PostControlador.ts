import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Autor from "../modelos/Autor";

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

    cadastra(req: Request, res: Response){
       
    }

    editar(req: Request, res: Response){
        

    }

    excluir (req: Request, res: Response){
        
    }
}