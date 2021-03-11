export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){ //esse if não vale para as classes que herdam a classe "Conta"
            console.log("Você não deveria instanciar um objeto do tipo conta!!!");
        }
    }

    set cliente(nome){
        if (nome instanceof Cliente){
            this._cliente = nome;
        } //se nome for uma instância de cliente 
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1;

        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if(valorSacado < this._saldo){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        
        return 0;     
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