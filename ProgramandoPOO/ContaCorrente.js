import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;

    _cliente;

    set cliente(nome){
        if (nome instanceof Cliente){
            this._cliente = nome;
        } //se nome for uma instância de cliente 
    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor;
            return valor;
        } 
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
    
}