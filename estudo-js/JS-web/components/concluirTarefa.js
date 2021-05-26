const BotaoConclui = () => {

    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = "concluir";

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (event) => {

    const botaoConclui = event.target;

    const tarefaConcluida = botaoConclui.parentElement;

    tarefaConcluida.classList.toggle("done");

}

export default BotaoConclui;