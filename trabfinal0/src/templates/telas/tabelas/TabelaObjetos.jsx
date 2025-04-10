import { Alert, Button, Container, Table } from "react-bootstrap";

export default function TabelaObjetos(props) {
  function excluirObjeto(objeto) {
    const novaLista = props.listaDeObjetos.filter(
      (c) => c.numero != objeto.numero
    );
    props.setListaDeObjetos(novaLista);
  }

  function selecionarObjetoParaEdicao(objeto) {
    props.setObjetoSelecionado(objeto);
    props.setModoEdicao(true);
    props.setMostrarTabela(false);
  }

  return (
    <Container>
      <Alert className="text-center" variant="success">
        <h2>Tabela de Objetos</h2>
      </Alert>
      <Button
        onClick={() => {
          props.setMostrarTabela(false);
        }}
        className="mb-3"
        variant="primary"
      >
        Registrar um objeto encontrado
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Número de Registro</th>
            <th>Nome do objeto</th>
            <th>Local encontrado</th>
            <th>Data encontrado</th>
            <th>Pessoa que encontrou</th>
            <th>Foto do objeto</th>
            <th>Observação</th>
            <th>Tipo do objeto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props?.listaDeObjetos?.map((objeto) => {
            return (
              <tr key={objeto.numero}>
                <td>{objeto.numero}</td>
                <td>{objeto.nome}</td>
                <td>{objeto.local}</td>
                <td>{objeto.data}</td>
                <td>{objeto.pessoa}</td>
                <td>
                  {objeto.foto && (
                    <img
                      src={
                        objeto.foto instanceof File
                          ? URL.createObjectURL(objeto.foto)
                          : objeto.foto
                      }
                      alt={objeto.nome}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </td>
                <td>{objeto.observacao}</td>
                <td>{objeto.tipo?.nome + "/" + objeto.tipo?.sigla}</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Button
                      onClick={() => selecionarObjetoParaEdicao(objeto)}
                      variant="warning"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Você confirma a exclusão deste objeto?"
                          )
                        ) {
                          excluirObjeto(objeto);
                        }
                      }}
                      variant="danger"
                    >
                      Excluir
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
