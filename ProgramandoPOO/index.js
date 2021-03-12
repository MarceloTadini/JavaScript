import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Marcelo", 11122233345);

const contaCorrenteMarcelo = new ContaCorrente(cliente1, 1001);
contaCorrenteMarcelo.depositar(500);
contaCorrenteMarcelo.sacar(100);

const contaPoupanca = new ContaPoupanca(50 ,cliente1, 1001);
contaPoupanca.sacar(5);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(20);
contaSalario.sacar(10);

console.log(contaSalario);

