import BotaoConclui from "./components/concluirTarefa.js";
import BotaoDeletar from "./components/deletarTarefa.js";

const criarTarefa = (event) => {

    event.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const paragrafo = `<p class="content">${inputValue}</p>`;

    tarefa.innerHTML = paragrafo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeletar());
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);