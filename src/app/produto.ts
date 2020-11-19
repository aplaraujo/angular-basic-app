export class Produto {
  nome: string;
  email: string;
  preco: number;
  desconto: number;
  embarque: Date;

  constructor(nome, email, preco, desconto, embarque) {
    this.nome = nome;
    this.email = email;
    this.preco = preco;
    this.desconto = desconto;
    this.embarque = embarque;
  }
}
