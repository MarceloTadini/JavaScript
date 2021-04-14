const criarTarefa = (evento)=> {
    evento.preventDefault(); //evita o recarregamento da página
    
    const inputTarefa = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    const valor = inputTarefa.value; //pega o valor do inputTarefa

    const tarefa = document.createElement('li'); 
    tarefa.classList.add('task'); //Adicionando classe a lista
    const conteudo = `<p class="content">${valor}</p>`; 

    tarefa.innerHTML = conteudo; //Atribuindo conteúdo a tarefa
    tarefa.appendChild(BotãoConclui());
    lista.appendChild(tarefa); //Declarando a 'li' como pai de 'p' e adicionando 'p' embaixo de 'p'


    inputTarefa.value = ""; //Limpando o input
} 

const NovaTarefa =  document.querySelector('[data-form-button]');

NovaTarefa.addEventListener('click', criarTarefa);

const BotãoConclui = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir'; //Atribuindo o texto do botão
    
    botaoConclui.addEventListener('click', ConcluirTarefa)

    return botaoConclui;
}

const ConcluirTarefa = (evento) =>{
    const botaoConclui = evento.target; //Recebe o elemento clicado

    const tarefaConcluida = botaoConclui.parentElement; //Pegando o pai do 'button', que é o 'li'

    tarefaConcluida.classList.toggle('done'); //Adiciona a classe done na classe anterior fazendo risco
}