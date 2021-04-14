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

export default BotaoDeleta;