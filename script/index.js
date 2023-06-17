const btnAdicionar = document.getElementById("btn-adicionar");
const btnConfirmar = document.getElementById("btn-confirmar");
const adicao = document.getElementById("adicao");
const listaDeTarefas = document.getElementById("lista-tarefas");
const descricao = document.getElementById("descricao");

let tarefas = [];

btnAdicionar.onclick = toggleAdicao;

btnConfirmar.addEventListener("click", function () {
  tarefas.push(descricao.value);
  criarLista();
  toggleAdicao();
});

function toggleAdicao() {
  adicao.classList.toggle("display-none");
  descricao.value = "";
}

function criarLista() {
  listaDeTarefas.innerHTML = "";
  tarefas.forEach((element, index) => {
    // Criando a div tarefa, pode ser par ou impar
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefa");
    if (index % 2 === 0) {
      tarefa.classList.add("par");
    } else {
      tarefa.classList.add("impar");
    }

    // Criando o input checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("check");

    // Criando o paragrafo de descrição da tareda
    const descricao = document.createElement("p");
    descricao.classList.add("descricao");
    descricao.innerText = element;

    // Criando o span delete
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined", "delete");
    span.setAttribute("id", `apagar-${index}`);
    span.innerText = "delete";

    // Colocando os childs na div tarefa
    tarefa.appendChild(checkbox);
    tarefa.appendChild(descricao);
    tarefa.appendChild(span);

    listaDeTarefas.appendChild(tarefa);
  });
  const apagar = document.querySelectorAll(".delete");

  apagar.forEach((element) => {
    element.addEventListener("click", function (event) {
      const prepararApagar = event.target.id.split("");
      paraApagar = +prepararApagar[prepararApagar.length - 1];
      tarefas = tarefas
        .slice(0, paraApagar)
        .concat(tarefas.slice(paraApagar + 1));
      criarLista();
    });
  });
}

function apagarTarefa() {}
