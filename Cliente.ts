export type Endereco = {
  cep: number;
  rua: string;
  bairro: string;
  cidade: string;
};

export type Pessoa = {
  nome: string;
  email: string;
  cpf: number;
};

export class Cliente {
  nome: string;
  email: string;
  cpf: number;
  dataCadastro: Date;
  endereco: Endereco[];

  constructor({ nome, email, cpf }: Pessoa) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.dataCadastro = new Date();
    this.endereco = [];
  }

  adicionarEndereco(endereco: Endereco): void {
    this.endereco.push(endereco);
  }
}
