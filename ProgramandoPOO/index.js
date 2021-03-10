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
contaCorrenteMarcelo.cliente = cliente1;
contaCorrenteMarcelo.agencia = 1001;
contaCorrenteMarcelo.depositar(500);


const contaCorrenteAna = new ContaCorrente();
contaCorrenteAna.cliente = cliente2;
contaCorrenteAna.agencia = 1002;

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.cliente = cliente3;
contaCorrenteJoao.agencia = 1003;

let valorTranferido = 200;

contaCorrenteMarcelo.transferir(valorTranferido, contaCorrenteAna);

console.log(contaCorrenteMarcelo, "\n", contaCorrenteAna);
