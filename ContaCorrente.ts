import { ContaBancaria, TipoContaBancaria } from "./ContaBancaria";

export class ContaCorrente extends ContaBancaria {
  private limite: number;

  constructor(contaBancaria: TipoContaBancaria) {
    super(contaBancaria);
    this.limite = 1000;
  }

  depositar(valor: number): string {
    this.saldo += valor;
    return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
  }

  sacar(valor: number, senha: string): string {
    if (senha !== this.senha) {
      return "Senha inválida";
    }
    const limiteTotal = this.saldo + this.limite;

    if (valor > limiteTotal) {
      return "Valor indisponivel para saque";
    }
    this.saldo -= valor;

    return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
  }
}
