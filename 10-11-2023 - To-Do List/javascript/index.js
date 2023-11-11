function adicionarTarefa() {
    let tarefa = {
        descricao: lblDescricao.value,
        concluida: false
    };
    listaTarefas.push(tarefa);
    apresentarTarefas();
}
function apresentarTarefas() {
    tbListaDeTarefas.innerHTML = '';
    for (let tarefa of listaTarefas) {
        let linha = document.createElement("tr");
        let colunaDescricao = document.createElement("td");
        let colunaConcluida = document.createElement("td");
        let checkConcluida = document.createElement("input");
        tbListaDeTarefas.appendChild(linha);
        tbListaDeTarefas.appendChild(colunaDescricao);
        colunaDescricao.textContent = tarefa.descricao;
        tbListaDeTarefas.appendChild(colunaConcluida);
        colunaConcluida.appendChild(checkConcluida);
        checkConcluida.setAttribute('type', 'checkbox');
        checkConcluida.addEventListener('click', () => {
            tarefa.concluida = checkConcluida.checked;
            console.log(listaTarefas);
        });
    }
}
const listaTarefas = [];
const btnAdicionar = document.getElementById('adicionar');
const lblDescricao = document.getElementById('descricao');
const tbListaDeTarefas = document.getElementById('listaTarefas');
btnAdicionar.addEventListener('click', adicionarTarefa);
