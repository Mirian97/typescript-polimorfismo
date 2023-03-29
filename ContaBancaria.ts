import { Cliente } from "./Cliente";

export type TipoContaBancaria = {
  saldo: number;
  numero: number;
  agencia: string;
  senha: string;
  cliente: Cliente;
};

export abstract class ContaBancaria {
  protected saldo: number;
  numero: number;
  agencia: string;
  protected senha: string;
  cliente: Cliente;

  constructor({ saldo, numero, agencia, senha, cliente }: TipoContaBancaria) {
    this.saldo = saldo;
    this.numero = numero;
    this.agencia = agencia;
    this.senha = senha;
    this.cliente = cliente;
  }

  consultarSaldo(senha: string): string {
    if (senha === this.senha) {
      return `Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
    }
    return "Senha inválida";
  }

  abstract depositar(valor: number): string;

  abstract sacar(valor: number, senha: string): string;
}
