import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Marcelo", 11122233345);

const contaCorrenteMarcelo = new ContaCorrente(cliente1, 1001);
contaCorrenteMarcelo.depositar(500);
contaCorrenteMarcelo.sacar(100);

const contaPoupanca = new ContaPoupanca(50 ,cliente1, 1001);
contaPoupanca.sacar(25);


console.log(contaCorrenteMarcelo);

