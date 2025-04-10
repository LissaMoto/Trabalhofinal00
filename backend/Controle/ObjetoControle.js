import Objeto from "../Modelo/Objeto.js";

export default class ObjetoControle {
    incluir(requisicao, resposta) {
        if(requisicao.method == 'POST' && requisicao.is("application/json")) {
            const { numero, nome, local, data, pessoa, foto, observacao, tipo } = requisicao.body;
            if(numero && nome && local && data && pessoa && foto && observacao && tipo) {
                const objeto = new Objeto(numero, nome, local, data, pessoa, foto, observacao, tipo);
                objeto.inserir()
                .then(() => {
                    resposta.status(200).json({"status":true, "mensagem":"Objeto adicionado com sucesso"});
                })
                .catch((erro) => {
                    resposta.status(500).json({"status":false, "mensagem":"Ocorreu um erro ao tentar cadastrar o objeto " + erro});
                });
            } else {
                resposta.status(400).json({"status":false, "mensagem":"Confirme os dados inseridos antes de enviar"});
            }
        } else {
            resposta.status(400).json({"status":false, "mensagem":"Erro na requisição! Consulte a API para mais detalhes"});
        }
    }




    consultar(requisicao, resposta) {
        if (requisicao.method == 'GET') {
            const numero = requisicao.params.numero;
            const objeto = new Objeto();
            
            objeto.consultar(numero)
                .then((lista) => {
                    resposta.status(200).json(lista);
                })
                .catch((erro) => {
                    resposta.status(500).json({ "status": false, "mensagem": "Erro ao consultar objeto " + erro });
                });
        } else {
            resposta.status(400).json({ "status": false, "mensagem": "Erro na requisição! Consulte a API para mais detalhes" });
        }
    }



 alterar(requisicao, resposta) {
    if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is("application/json")) {
        const {nome, local, data, pessoa, foto, observacao, tipo } = requisicao.body;
        const numero = requisicao.params.numero;
        if (numero && nome && local && data && pessoa && foto && observacao && tipo) {
            const objeto = new Objeto( numero, nome, local, data, pessoa, foto, observacao, tipo );
            objeto.alterar()
                .then(() => {
                    resposta.status(200).json({ "status": true, "mensagem": "Objeto alterado com sucesso" });
                })
                .catch((erro) => {
                    resposta.status(500).json({ "status": false, "mensagem": "Ocorreu um erro ao tentar alterar o objeto: " + erro });
                });
        } else {
            resposta.status(400).json({ "status": false, "mensagem": "Confirme os dados inseridos antes de enviar" });
        }
    } else {
        resposta.status(400).json({ "status": false, "mensagem": "Erro na requisição! Consulte a API para mais detalhes" });
    }
}
    


    excluir(requisicao, resposta) {
        if (requisicao.method === 'DELETE') {
            const numero = requisicao.params.numero;
            if (numero) {
                const objeto = new Objeto(numero,'', '', '', '', '', '', '' );
                objeto.excluir().then(() => {
                    resposta.status(200).json({ "status": true, "mensagem": "Objeto excluido com sucesso" });
                }).catch((erro) => {
                    resposta.status(500).json({ "status": false, "mensagem": "Ocorreu um erro ao tentar excluir o objeto " + erro });
                });
            } else {
                resposta.status(400).json({ "status": false, "mensagem": "Numero de registro não foi fornecido corretamente" });
            }
        } else {
            resposta.status(400).json({ "status": false, "mensagem": "Erro na requisição! Consulte a API para mais detalhes" });
        }
    }
}
