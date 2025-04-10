import express from "express";
import rota from "./Rota/Rota.js";

const host = "localhost";
const porta = 4000;
const dbConfig = {
  host: 'localhost',
  user: '',
  password: 'YES',
  database: 'backend'
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/objeto", rota);

app.listen(porta, host, () => {
  console.log(`Servidor rodeado em http://${host}:${porta}`);
});

/*import Objeto from "./Modelo/Objeto.js";

/*let objObjeto = new Objeto(
  "000-022",
  "Caneta",
  "Biblioteca",
  "2025-01-28",
  "Luiza Santos",
  "./fotos/caneta.jpg",
  "Aguardando",
  "Outro/OUT"
);

objObjeto.nome = "Caneta";
objObjeto.local = "Refeitorio";

/*objObjeto.gravar().then(() => {
  console.log("O objeto foi armazenado com sucesso no banco de dados!");
});*/

/*objObjeto.removerDoBancoDados(() => {
  console.log("Objeto excluido do bando de dados");
});*/

/*objObjeto.atualizar(() => {
  console.log("O objeto foi atualizado com sucesso!");
});*/

/*const objObjeto = new Objeto();
objObjeto.consultar("Caneta").then((objetos) => {
  for (const objeto of objetos) {
    console.log(objeto.toJSON());
  }
});*/
