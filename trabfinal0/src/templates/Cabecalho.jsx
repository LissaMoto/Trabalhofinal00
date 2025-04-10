import React from "react";
import { Alert } from "react-bootstrap";
export default function Cabecalho(props) {
  return (
    <div>
      <Alert variant="success" className="text-center">
        <h1>{props.titulo || "Informe um texto para o cabeçalho"}</h1>
      </Alert>
    </div>
  );
}
