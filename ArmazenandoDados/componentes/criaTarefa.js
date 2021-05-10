import { carregaTarefa } from './carregaTarefa.js';
import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';
 
export const handleNewItem = (evento) => {
    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendar = document.querySelector('[data-form-date]');
    const date = moment(calendar.value); //Recebe o valor do input da data a lib moment
    const dateFormat = date.format('DD/MM/YYYY');

    const datas = {
        valor, 
        dateFormat
    }

    const tarefasAtualizadas = [...tarefas, datas];

    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));

    input.value = " ";
    carregaTarefa();
}

export const Tarefa = ({valor, dateFormat}) => {

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${dateFormat} * ${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    
    return tarefa;
}