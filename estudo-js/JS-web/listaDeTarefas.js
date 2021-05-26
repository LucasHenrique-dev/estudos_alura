(() => {
       
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
    lista.appendChild(tarefa);
    input.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConclui = () => {

    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "Concluir";

    addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (event) => {

    const botaoConclui = event.target;

    const tarefaConcluida = botaoConclui.parentElement;

    tarefaConcluida.classList.toggle("done");

}
})()