const criarTarefa = (evento)=> {
    evento.preventDefault(); //evita o recarregamento da página
    
    const inputTarefa = document.querySelector('[data-form-input]');
    const lista = document.querySelector('[data-list]');
    const valor = inputTarefa.value; //pega o valor do inputTarefa

    const tarefa = document.createElement('li');
    tarefa.classList.add('task'); //Adicionando classe a lista
    const conteudo = `<p class="content">${valor}</p>`; 

    tarefa.innerHTML = conteudo; //Atribuindo conteúdo
    lista.appendChild(tarefa); //Declarando a lista como pai de p


    inputTarefa.value = ""; //Limpando o input
} 

const NovaTarefa =  document.querySelector('[data-form-button]');

NovaTarefa.addEventListener('click', criarTarefa);