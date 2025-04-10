import { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function FormCadastroObjeto(props) {
  const [validado, setvalidado] = useState(false);

  const [objeto, setObjeto] = useState(
    props.objetoSelecionado || {
      numero: "",
      nome: "",
      local: "",
      data: "",
      pessoa: "",
      foto: null,
      observacao: "",
      tipo: { id: "", nome: "", sigla: "" },
    }
  );

  useEffect(() => {
    if (props.modoEdicao && props.objetoSelecionado) {
      setObjeto(props.objetoSelecionado);
    }
  }, [props.modoEdicao, props.objetoSelecionado]);

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    evento.preventDefault();
    evento.stopPropagation();

    if (form.checkValidity() === false) {
      setvalidado(true);
    } else {
      const objetoAtualizado = {
        ...objeto,
        foto: objeto.foto || props.objetoSelecionado?.foto,
      };

      if (props.modoEdicao) {
        const novaLista = props.listaDeObjetos.map((obj) =>
          obj.numero === objetoAtualizado.numero ? objetoAtualizado : obj
        );
        props.setListaDeObjetos(novaLista);
      } else {
        props.setListaDeObjetos([...props.listaDeObjetos, objetoAtualizado]);
      }

      props.setModoEdicao(false);
      props.setObjetoSelecionado({
        numero: "",
        nome: "",
        local: "",
        data: "",
        pessoa: "",
        foto: null,
        observacao: "",
        tipo: { id: 1, nome: "Chave", sigla: "CHA" },
      });
      props.setMostrarTabela(true);
    }
  }

  function atualizarObjeto(evento) {
    setObjeto({ ...objeto, [evento.target.name]: evento.target.value });
  }

  function atualizarFoto(evento) {
    const arquivo = evento.target.files[0];
    if (arquivo) {
      setObjeto({ ...objeto, foto: arquivo });
    }
  }

  function selecionarTipo(evento) {
    const id_tipo = parseInt(evento.target.value, 10);
    const tipoSelecionado = props.listaDeTipos.find(
      (tipo) => tipo.id === id_tipo
    );
    setObjeto({ ...objeto, tipo: tipoSelecionado });
  }
  return (
    <>
      <div
        className="border"
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        <h3>Formulário de Cadastro de Objetos</h3>
      </div>
      <Form noValidate validated={validado} onSubmit={manipularSubmissao}>
        <Row className="mb-5">
          <Form.Group as={Col} md="4" xs="12" className="mb-4">
            <Form.Label>Número de Registro</Form.Label>
            <Form.Control
              id="numero"
              name="numero"
              type="text"
              placeholder="Número de registro do objeto"
              required
              value={objeto.numero}
              onChange={atualizarObjeto}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira o número de registro do objeto.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12">
            <Form.Label>Nome do objeto</Form.Label>
            <Form.Control
              required
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome do objeto encontrado"
              value={objeto.nome}
              onChange={atualizarObjeto}
            />
            <Form.Control.Feedback type="invalid">
              Informe o nome do objeto!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12">
            <Form.Label>Local encontrado</Form.Label>
            <Form.Control
              required
              id="local"
              name="local"
              type="text"
              placeholder="Local onde o objeto foi encontrado"
              value={objeto.local}
              onChange={atualizarObjeto}
            />
            <Form.Control.Feedback type="invalid">
              Informe o local que o objeto foi encontrado!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12" className="mb-4">
            <Form.Label>Data na qual o objeto foi encontrado</Form.Label>
            <Form.Control
              required
              type="date"
              id="data"
              name="data"
              value={objeto.data}
              onChange={atualizarObjeto}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma data válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12">
            <Form.Label>Nome da pessoa que o encontrou</Form.Label>
            <Form.Control
              required
              id="pessoa"
              name="pessoa"
              type="text"
              placeholder="Nome da pessoa que encontrou o objeto"
              value={objeto.pessoa}
              onChange={atualizarObjeto}
            />
            <Form.Control.Feedback type="invalid">
              Informe o nome da pessoa que encontrou o objeto!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12">
            <Form.Label>Foto do objeto</Form.Label>
            <Form.Control
              required
              id="foto"
              name="foto"
              type="file"
              accept="image/*"
              onChange={atualizarFoto}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, insira uma foto válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12">
            <Form.Label>Observação sobre o objeto</Form.Label>
            <Form.Select
              id="observacao"
              name="observacao"
              required
              value={objeto.observacao}
              onChange={atualizarObjeto}
            >
              <option value="" disabled>
                Selecione a observação atual do objeto
              </option>
              <option value="aguardando">Aguardando</option>
              <option value="entregue">Entregue</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" xs="12">
            <Form.Label>Escolha o tipo do objeto</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={objeto.tipo.id || ""}
              onChange={selecionarTipo}
              required
            >
              <option value="" disabled>
                Selecione o tipo do objeto
              </option>
              {props.listaDeTipos.map((tipo) => (
                <option key={tipo.id} value={tipo.id}>
                  {tipo.id + " - " + tipo.nome + "/" + tipo.sigla}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Por favor, escolha uma resposta.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit" className="me-2">
          {props.modoEdicao ? "Atualizar" : "Cadastrar"}
        </Button>
        <Button
          onClick={() => {
            props.setModoEdicao(false);
            props.setMostrarTabela(true);
          }}
        >
          O objeto é meu
        </Button>
      </Form>
    </>
  );
}
