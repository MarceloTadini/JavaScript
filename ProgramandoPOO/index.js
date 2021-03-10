import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const contaCorrenteMarcelo = new ContaCorrente();
contaCorrenteMarcelo.cliente = new Cliente();
contaCorrenteMarcelo.cliente.nome = "Marcelo";
contaCorrenteMarcelo.cliente.cpf = 11122233345;
contaCorrenteMarcelo.agencia = 1001;
contaCorrenteMarcelo.depositar(500);


const contaCorrenteAna = new ContaCorrente();
contaCorrenteAna.cliente = new Cliente();
contaCorrenteAna.cliente.nome = "Ana";
contaCorrenteAna.cliente.cpf = 99988877721;
contaCorrenteAna.agencia = 1002;


let valorTranferido = 200;

contaCorrenteMarcelo.transferir(valorTranferido, contaCorrenteAna);

console.log(contaCorrenteMarcelo, "\n", contaCorrenteAna);
