// =============================================
// VARIÁVEIS GLOBAIS
// =============================================

var filmes = ["O Poderoso Chefão", "Interestelar", "Parasita"];

const USUARIO_CORRETO = "aluno";
const SENHA_CORRETA = "fiap2025";

// =============================================
// FUNÇÕES DE LOGIN
// =============================================

function fazerLogin(evento) {
  evento.preventDefault();

  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  var mensagemErro = document.getElementById("erroLogin");

  if (usuario === "" || senha === "") {
    mensagemErro.textContent = "Preencha todos os campos antes de entrar.";
    return;
  }

  if (usuario !== USUARIO_CORRETO || senha !== SENHA_CORRETA) {
    mensagemErro.textContent = "Usuário ou senha incorretos. Tente novamente.";
    return;
  }

  mensagemErro.textContent = "";
  document.getElementById("telaLogin").classList.add("oculto");
  document.getElementById("telaPrincipal").classList.remove("oculto");
  renderizarLista();
}

function fazerLogout() {
  document.getElementById("telaPrincipal").classList.add("oculto");
  document.getElementById("telaLogin").classList.remove("oculto");
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("erroLogin").textContent = "";
}

// =============================================
// FUNÇÕES DE CRUD
// =============================================

function adicionarNoFinal() {
  var input = document.getElementById("inputFilme");
  var nomeFilme = input.value.trim();
  var mensagemErro = document.getElementById("erroFilme");

  if (nomeFilme === "") {
    mensagemErro.textContent = "O nome do filme não pode ser vazio.";
    return;
  }

  mensagemErro.textContent = "";
  filmes.push(nomeFilme);
  input.value = "";
  renderizarLista();
}

function adicionarNoInicio() {
  var input = document.getElementById("inputFilme");
  var nomeFilme = input.value.trim();
  var mensagemErro = document.getElementById("erroFilme");

  if (nomeFilme === "") {
    mensagemErro.textContent = "O nome do filme não pode ser vazio.";
    return;
  }

  mensagemErro.textContent = "";
  filmes.unshift(nomeFilme);
  input.value = "";
  renderizarLista();
}

function removerFilme(indice) {
  filmes.splice(indice, 1);
  renderizarLista();
}

function editarFilme(indice) {
  renderizarLista(indice);
}

function confirmarEdicao(indice) {
  var inputEdicao = document.getElementById("inputEdicao" + indice);
  var novoNome = inputEdicao.value.trim();
  var erroEdicao = document.getElementById("erroEdicao" + indice);

  if (novoNome === "") {
    erroEdicao.textContent = "O nome do filme não pode ser vazio.";
    return;
  }

  filmes[indice] = novoNome;
  renderizarLista();
}

function cancelarEdicao() {
  renderizarLista();
}

// =============================================
// FUNÇÃO DE RENDERIZAÇÃO
// =============================================

function renderizarLista(indiceModoEdicao) {
  var lista = document.getElementById("listaFilmes");
  var contador = document.getElementById("contadorFilmes");

  lista.innerHTML = "";

  contador.textContent = filmes.length + " filme(s)";

  if (filmes.length === 0) {
    lista.innerHTML = "<p class='lista-vazia'>Nenhum filme na lista. Adicione um acima!</p>";
    return;
  }

  for (var i = 0; i < filmes.length; i++) {
    var item = document.createElement("li");
    item.className = "item-filme";

    if (i === indiceModoEdicao) {
      item.classList.add("modo-edicao");

      item.innerHTML =
        "<div class='edicao-topo'>" +
          "<span class='item-numero'>" + (i + 1) + "</span>" +
          "<span class='edicao-label'>Editando</span>" +
        "</div>" +
        "<input " +
          "type='text' " +
          "id='inputEdicao" + i + "' " +
          "class='input-edicao' " +
          "value='" + filmes[i].replace(/'/g, "&#39;") + "' " +
          "maxlength='100' " +
        "/>" +
        "<p id='erroEdicao" + i + "' class='erro-edicao'></p>" +
        "<div class='edicao-botoes'>" +
          "<button class='btn-cancelar' onclick='cancelarEdicao()'>Cancelar</button>" +
          "<button class='btn-confirmar' onclick='confirmarEdicao(" + i + ")'>Confirmar</button>" +
        "</div>";
    } else {
      item.innerHTML =
        "<span class='item-numero'>" + (i + 1) + "</span>" +
        "<span class='item-nome'>" + filmes[i] + "</span>" +
        "<div class='item-acoes'>" +
          "<button class='btn-editar' onclick='editarFilme(" + i + ")'>Editar</button>" +
          "<button class='btn-remover' onclick='removerFilme(" + i + ")'>Remover</button>" +
        "</div>";
    }

    lista.appendChild(item);
  }
}

// =============================================
// INICIALIZAÇÃO
// =============================================

renderizarLista();
