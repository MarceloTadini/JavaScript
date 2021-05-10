import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';
 
const handleNewItem = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendar = document.querySelector('[data-form-date]');
    const date = moment(calendar.value); //Recebe o valor do input da data a lib moment
    const dateFormat = date.format('DD/MM/YYYY');

    const datas = {
        valor, 
        dateFormat
    }

    const criaTarefa = criarTarefa(datas);

    lista.appendChild(criaTarefa);
    input.value = " ";
}

const criarTarefa = ({valor, dateFormat}) => {

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${dateFormat} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    
    return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNewItem);