import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useRef } from "react";
import { ContextoLogin } from "../../../App.js";

export default function FormLogin(props) {
  const contextoLogin = useContext(ContextoLogin);
  const usuario = useRef();
  const senha = useRef();

  function verificaCredenciais(evento) {
    const usuarioInformado = usuario.current.value;
    const senhaInformada = senha.current.value; 
    if (usuarioInformado === "Pessoa00" && senhaInformada === "1234") {
      contextoLogin.setDadosLogin({
        usuario: usuarioInformado,
        logado: true,
      });
    } else {
      window.alert(
        "As informações fornecidas não correspondem a nenhum registro. Tente novamente."
      );
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  return (
    <Container className="login-background w-25 p-5">
      <Form
        className="mt-5 border p-4"
        style={{ color: "#008000" }}
        onSubmit={verificaCredenciais}
      >
        <Form.Text
          className="text-muted text-center"
          style={{ fontSize: "1.5rem", display: "block" }}
        >
          Bem-vindo ao Achados&Perdidos!
        </Form.Text>
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            id="usuario"
            placeholder="Informe seu usuario"
            ref={usuario}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Informe sua senha"
            id="senha"
            name="senha"
            ref={senha}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
