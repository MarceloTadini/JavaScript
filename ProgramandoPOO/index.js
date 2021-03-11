import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Marcelo", 11122233345);

const contaCorrenteMarcelo = new ContaCorrente(cliente1, 1001);
contaCorrenteMarcelo.depositar(500);

const contaPoupanca = new ContaPoupanca(cliente1, contaCorrenteMarcelo.agencia);

console.log(contaCorrenteMarcelo);

