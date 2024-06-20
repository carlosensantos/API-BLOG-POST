import { Router} from 'express'
import AutorControlador from './controladores/AutorControlador'
import PostControlador from './controladores/postControlador'

const rotas = Router()

const autorControlador = new AutorControlador()
const postControlador = new PostControlador()

rotas.get('/autores', autorControlador.listar)
rotas.get('/autores/:id', autorControlador.detalhar)
rotas.post('/autores', autorControlador.cadastra)
rotas.put('/autores/:id', autorControlador.editar)
rotas.delete('/autores/:id', autorControlador.excluir)

rotas.get('/postagens', postControlador.listar)
rotas.get('/postagens/:id', postControlador.detalhar)


export default rotas