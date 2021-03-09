export class ContaCorrente{
    _saldo = 0;
    agencia;

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
    
}