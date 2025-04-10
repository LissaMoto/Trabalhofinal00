import TelaCadastroObjeto from "./templates/telas/TelaCadastroObjeto";
import TelaLogin from "./templates/telas/TelaLogin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaMenu from "./templates/telas/TelaMenu.js";
import { useState } from "react";
import { createContext } from "react";

export const ContextoLogin = createContext();

function App() {
  const [dadosLogin, setDadosLogin] = useState({ usuario: "", logado: false });

  if (dadosLogin.logado) {
    return (
      <div className="App">
        <ContextoLogin.Provider value={{ dadosLogin, setDadosLogin }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TelaMenu />}></Route>
              <Route path="/objeto" element={<TelaCadastroObjeto />}></Route>
            </Routes>
          </BrowserRouter>
        </ContextoLogin.Provider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ContextoLogin.Provider value={{ dadosLogin, setDadosLogin }}>
          <TelaLogin />
        </ContextoLogin.Provider>
      </div>
    );
  }
}

export default App;
