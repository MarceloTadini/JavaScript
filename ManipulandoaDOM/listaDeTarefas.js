const criarTarefa = (evento)=> {
    evento.preventDefault(); //evita o recarregamento da página
    
    const inputTarefa = document.querySelector('[data-form-input]');
    const valor = inputTarefa.value; //pega o valor do inputTarefa

    const tarefa = document.querySelector('[data-tesk]');
    const conteudo = `<p class="content">${valor}</p>`; 

    tarefa.innerHTML = conteudo; //colocando o conteudo na tarefa

    inputTarefa.value = ""; //Limpando o input
} 

const NovaTarefa =  document.querySelector('[data-form-button]');

NovaTarefa.addEventListener('click', criarTarefa);