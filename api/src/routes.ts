import {Router} from "express";
import {listarCarros,criarCarros,detalharCarros,atualizarCarros,excluirCarros} from "./controllers/carros"

const routes = Router()

//listagem de carros
routes.get('/carros', listarCarros)
//detalhar
routes.get('/carros/:id', detalharCarros)
//cadastro de carro
routes.post('/carros', criarCarros)
//atualização de carro
routes.put('/carros/:id', atualizarCarros )
//exclusao do carro
routes.delete('/carros/:id', excluirCarros)

export default routes;