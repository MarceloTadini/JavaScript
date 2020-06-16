console.log(`Trabalhando com listas`);

// const salvador;
// const saoPaulo;
// const rioDeJaneiro;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //Adicionando um item no final do vetor


console.log("Destinos possíveis: ", listaDeDestinos);

listaDeDestinos.splice(1,1); //Primeiro número == posição, segundo == quantidade de números deletados 

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);