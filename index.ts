import { Cliente } from "./Cliente";
import { ContaCorrente } from "./ContaCorrente";

const mirian = new Cliente({
  nome: "Mirian",
  email: "mirian@cubos.com",
  cpf: 121312323,
});

const camila = new Cliente({
  nome: "Camila",
  email: "camila@cubos.com",
  cpf: 121333323,
});

const mirianContaCorrente = new ContaCorrente({
  cliente: mirian,
  saldo: 20000,
  numero: 12232,
  agencia: "Nubank",
  senha: "12345",
});
const camilaContaPoupanca = new ContaCorrente({
  cliente: camila,
  saldo: 10000,
  numero: 34555,
  agencia: "Santander",
  senha: "123456",
});

// console.log(mirianContaCorrente, camilaContaPoupanca);
console.log(camilaContaPoupanca.sacar(10000, "123456"));
console.log(camilaContaPoupanca.depositar(20000));
