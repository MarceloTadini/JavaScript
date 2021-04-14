( () => {const criarTarefa = (evento)=> {
    evento.preventDefault(); //evita o recarregamento da página
    
    const inputTarefa = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    const valor = inputTarefa.value; //pega o valor do inputTarefa

    const tarefa = document.createElement('li'); 
    tarefa.classList.add('task'); //Adicionando classe a lista
    const conteudo = `<p class="content">${valor}</p>`; 

    tarefa.innerHTML = conteudo; //Atribuindo conteúdo a tarefa
    tarefa.appendChild(BotãoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa); //Declarando a 'li' como pai de 'p' e adicionando 'p' embaixo de 'p'


    inputTarefa.value = ""; //Limpando o input
} 

const NovaTarefa =  document.querySelector('[data-form-button]');

NovaTarefa.addEventListener('click', criarTarefa);

const BotãoConclui = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir'; //Atribuindo o texto do botão
    
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui;
}

const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target; //Recebe o alvo do elemento clicado

    const tarefaConcluida = botaoConclui.parentElement; //Pegando o pai do 'button', que é o 'li'

    tarefaConcluida.classList.toggle('done'); //Adiciona a classe done na classe anterior fazendo risco
}

const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;
    const tarefaConcluida = botaoDeleta.parentElement;

    tarefaConcluida.remove(); //Remove o nó da árvore
}

})() //Funçõ de invocação imediata para proteger as regras de negócio