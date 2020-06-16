console.log(`\nTrabalhando com condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let passsagemComprada = false;
const destino = "Salvador";



console.log("\nDestinos possíveis: ", listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true; 

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; //Sair do laço quando achar o valor
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste)
{
    console.log("Boa Viagem");
}
else{
    console.log("Houve um erro");
}

for(let cont ; cont<3; cont++){
    
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
        //break; //Sair do laço quando achar o valor
    }
}
