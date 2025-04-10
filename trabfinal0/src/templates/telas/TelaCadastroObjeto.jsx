import { useState } from "react";
import Pagina from "../Pagina.jsx";
import FormCadastroObjeto from "./formularios/FormCadastroObjeto.jsx";
import TabelaObjetos from "./tabelas/TabelaObjetos.jsx";
import objetos from "../../dados/objetos.js";
import tipos from "../../dados/tipos.js";

export default function TelaCadastroObjeto(props) {
  const [mostrarTabela, setMostrarTabela] = useState(false); // Mudança aqui
  const [listaDeObjetos, setListaDeObjetos] = useState(objetos);
  const [objetoSelecionado, setObjetoSelecionado] = useState(null);
  const [modoEdicao, setModoEdicao] = useState(false);

  return (
    <Pagina titulo="Tela de Cadastro de Objetos">
      {mostrarTabela ? (
        <TabelaObjetos
          mostrarTabela={mostrarTabela}
          setMostrarTabela={setMostrarTabela}
          listaDeObjetos={listaDeObjetos}
          setListaDeObjetos={setListaDeObjetos}
          setObjetoSelecionado={setObjetoSelecionado}
          setModoEdicao={setModoEdicao}
        />
      ) : (
        <FormCadastroObjeto
          mostrarTabela={mostrarTabela}
          setMostrarTabela={setMostrarTabela}
          listaDeObjetos={listaDeObjetos}
          setListaDeObjetos={setListaDeObjetos}
          listaDeTipos={tipos}
          objetoSelecionado={objetoSelecionado}
          modoEdicao={modoEdicao}
          setModoEdicao={setModoEdicao}
          setObjetoSelecionado={setObjetoSelecionado}
        />
      )}
    </Pagina>
  );
}
