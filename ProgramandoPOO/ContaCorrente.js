export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0;

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