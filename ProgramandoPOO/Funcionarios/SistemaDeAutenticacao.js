/*
 Ser autenticavel significa ter a propriedade "senha"

 Ducky Type = se comporta como um pato, anda e faz barulho como um, 
              não me interessa se ele realmente é um pato, vou tratá-lo como um.
*/

export class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}