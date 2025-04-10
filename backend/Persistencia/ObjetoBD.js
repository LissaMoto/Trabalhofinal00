import Objeto from "../Modelo/Objeto.js";
import conectar from "./Conexao.js";

export default class ObjetoBD{
async incluir(objeto){
  if (item instanceof Objeto){
      const conexao = await conectar();
      const sql = `INSERT INTO item(numero, nome, local, data, pessoa, foto, observacao, tipo) \
                   VALUES(?,?,?,?,?,?,?,?)`

      const valores =[objeto.numero, objeto.nome, objeto.local, objeto.data, objeto.pessoa, 
        objeto.foto, objeto.observacao, objeto.tipo];
      await conexao.query(sql, valores);

  }
}

async alterar(objeto) {
  if (item instanceof Objeto) {
      const conexao = await conectar();
      const sql = `UPDATE objeto SET nome = ?, local = ?, data = ?, pessoa = ?,foto = ?, observacao = ?, tipo = ? 
                   WHERE numero = ?;`;

      const valores = [objeto.nome, objeto.local, objeto.data, objeto.pessoa, objeto.foto,objeto.observacao, objeto.tipo, objeto.numero];
      await conexao.query(sql, valores);
  }
}

async excluir(objeto){
  if (objeto instanceof Objeto){
      const conexao = await conectar();
      const sql = `DELETE FROM item WHERE numero=?`;
      const valores =[objeto.numero];
      await conexao.query(sql, valores);

  }

}

async consultar(termo){
  const conexao = await conectar();
  const sql = `SELECT * FROM objeto WHERE nome LIKE ?`;
  const valores = ["%" + termo + "%"]
  const [rows] = await conexao.query(sql, valores);
  const listaObjetos = [];
  for(const row of rows){
      const objeto = new Objeto(row["numero"],row["nome"],row["local"],row["data"],
                            row["pessoa"],row["foto"],row["observacao"],row["tipo"]);
                            listaObjetos.push(objeto);
  }
  return listaObjetos;
}

async consultarNumero(numero){
  const conexao = await conectar();
  const sql = `SELECT * FROM objeto WHERE numero = ?`;
  const valores = [numero]
  const [rows] = await conexao.query(sql, valores);
  const listaObjetos = [];
  for(const row of rows){
      const objeto = new Objeto(row["numero"],row["nome"],row["local"],row["data"],
                            row["pessoa"],row["foto"],row["observacao"],row["tipo"]);
                            listaObjetos.push(objeto);
  }
  return listaObjetos;

}
}
