
const BotaoConclui = () =>{
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

export default BotaoConclui;