import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Marcelo", 11122233345);
const cliente2 = new Cliente("Ana", 99988877721);
const cliente3 = new Cliente("João", 55566622290);

const contaCorrenteMarcelo = new ContaCorrente(cliente1, 1001);
contaCorrenteMarcelo.depositar(500);
const contaCorrenteAna = new ContaCorrente(cliente2, 1002);
const contaCorrenteJoao = new ContaCorrente(cliente3, 1003);

let valorTranferido = 200;
contaCorrenteMarcelo.transferir(valorTranferido, contaCorrenteAna);

console.log(ContaCorrente.numeroDeContas);

