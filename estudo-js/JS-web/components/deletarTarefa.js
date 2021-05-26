const BotaoDeletar = () => {

    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = "deletar";
    botaoDeletar.classList.add('delete-button');

    botaoDeletar.addEventListener('click', deletarTarefa)

    return botaoDeletar;
}

const deletarTarefa = (event) => {

    const botaoDeletar = event.target;

    const tarefaConcluida = botaoDeletar.parentElement;

    tarefaConcluida.remove();

    return botaoDeletar;
}

export default BotaoDeletar;