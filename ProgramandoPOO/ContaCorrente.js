import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia); //chama o construtor dentro da classe pai
        ContaCorrente.numeroDeContas += 1; //Cada vez que o new for chamado, será add uma nova conta
    }

    //sobrescrevendo o método da classe pai
    sacar(valor){
        let taxa = 1.1;
        
        return this._sacar(valor, taxa);
    }

}