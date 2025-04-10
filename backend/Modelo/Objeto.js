import ObjetoBD from "../Persistencia/ObjetoBD.js";
export default class Objeto {
  #numero;
  #nome;
  #local;
  #data;
  #pessoa;
  #foto;
  #observacao;
  #tipo;

  constructor(numero, nome, local, data, pessoa, foto, observacao, tipo) {
    this.numero = numero;
    this.nome = nome;
    this.local = local;
    this.data = data;
    this.pessoa = pessoa;
    this.foto = foto;
    this.observacao = observacao;
    this.tipo = tipo;
  }


  toJSON() {
    return {
      numero: this.#numero,
      nome: this.#nome,
      local: this.#local,
      data: this.#data,
      pessoa: this.#pessoa,
      foto: this.#foto,
      observacao: this.#observacao,
      tipo: this.#tipo,
    };
  }

  get numero() {
    return this.#numero;
  }
  set numero(novoNumero) {
    this.#numero = novoNumero;
  }

  get nome() {
    return this.#nome;
  }
  set nome(novoNome) {
    if (novoNome != "") this.#nome = novoNome;
  }

  get local() {
    return this.#local;
  }
  set local(novoLocal) {
    this.#local = novoLocal;
  }

  get data() {
    return this.#data;
  }
  set data(novoData) {
    this.#data = novoData;
  }

  get pessoa() {
    return this.#pessoa;
  }
  set pessoa(novoPessoa) {
    this.#pessoa = novoPessoa;
  }

  get foto() {
    return this.#foto;
  }
  set foto(novoFoto) {
    this.#foto = novoFoto;
  }

  get observacao() {
    return this.#observacao;
  }
  set observacao(novoObservacao) {
    this.#observacao = novoObservacao;
  }

  get tipo() {
    return this.#tipo;
  }
  set tipo(novoTipo) {
    this.#tipo = novoTipo;
  }

async gravar(){
  const objetoBD = new ObjetoBD();
  await objetoBD.incluir(this);
}

async atualizar(){
  const objetoBD = new ObjetoBD();
  await objetoBD.alterar(this);
}

async removerDoBancoDados(){
  const objetoBD = new ObjetoBD();
  await objetoBD.excluir(this);
}

async consultar(termo){
  const objetoBD = new ObjetoBD();
  const objetos = await objetoBD.consultar(termo)
  return objetos;
}

async consultarNumero(numero){
  const objetoBD = new ObjetoBD();
  const objetos = await objetoBD.consultarNumero(termo);
  return objetos;
}

}
