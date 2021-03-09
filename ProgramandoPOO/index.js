import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente();


cliente1.nome = "Marcelo";
cliente1.cpf = 11122233345;


const cliente2 = new Cliente();

cliente2.nome = "Ana";
cliente2.cpf = 99988877721;


const cliente3 = new Cliente();

cliente3.nome = "João";
cliente3.cpf = 55566622290;

const contaCorrenteMarcelo = new ContaCorrente();

contaCorrenteMarcelo.agencia = 1001;
contaCorrenteMarcelo.depositar(450);
const valorSacado = contaCorrenteMarcelo.sacar(200);


console.log(valorSacado);

const contaCorrenteAna = new ContaCorrente();

contaCorrenteAna.agencia = 1001;

const contaCorrenteJoao = new ContaCorrente();

contaCorrenteJoao.agencia = 1001;

