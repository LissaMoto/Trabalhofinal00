import { Router } from "express";
import ObjetoControle from "../Controle/ObjetoControle.js";

const rota = Router();
const Controle = new ObjetoControle();

rota.post('/', Controle.incluir);
rota.put('/:numero', Controle.alterar); 
rota.patch('/:numero', Controle.alterar);
rota.delete('/:numero', Controle.excluir);
rota.get('/:numero', Controle.consultar);
rota.get('/', Controle.consultar);

export default rota;
