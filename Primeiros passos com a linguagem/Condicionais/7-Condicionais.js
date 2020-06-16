console.log(`Trabalhando com condicionais`);


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const passsagemComprada = true;


console.log("Destinos possíveis: ", listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);

// }
// else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// }
// else {
//     console.log("Comprador menor de idade");

// }

// console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade ou acompanhado");
    listaDeDestinos.splice(1, 1);

}
else {
    console.log("Comprador menor de idade");

}

console.log("Embarque:");

if(idadeComprador >= 18 && passsagemComprada){
    console.log("Boa viagem");
}
else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);