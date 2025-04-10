const objetos = [
  {
    numero: "000-001",
    nome: "Chaves do carro",
    local: "Estacionamento dos funcionarios",
    data: "2024-09-20",
    pessoa: "João Silva",
    foto: require("./fotos/chaves.jpg"),
    observacao: "Aguardando",
    tipo: {
      id: 1,
      nome: "Chaves",
      sigla: "CHA",
    },
  },

  {
    numero: "000-002",
    nome: "Celular iphone 14",
    local: "Pia do banheiro masculino 1F lado sul",
    data: "2024-10-05",
    pessoa: "Mario Oliveira",
    foto: require("./fotos/iphone14.jpg"),
    observacao: "Entregue",
    tipo: {
      id: 2,
      nome: "Celular",
      sigla: "CEL",
    },
  },

  {
    numero: "000-003",
    nome: "Carteira de dinheiro",
    local: "Entrada do bloco A",
    data: "2024-11-14",
    pessoa: "Carlos Pereira",
    foto: require("./fotos/carteira.jpg"),
    observacao: "Entregue",
    tipo: {
      id: 3,
      nome: "Carteira",
      sigla: "CAR",
    },
  },

  {
    numero: "000-004",
    nome: "Óculos escuro",
    local: "Chao do banheiro feminino 2F lado oeste",
    data: "2025-01-22",
    pessoa: "Ana Costa",
    foto: require("./fotos/oculosescuro.jpg"),
    observacao: "Aguardando",
    tipo: {
      id: 4,
      nome: "Óculos",
      sigla: "OCL",
    },
  },
];

export default objetos;
