var botaoAdicionar = document.querySelector("#adicionar");
var tdAtividade = document.querySelector(".infoAtividade");
var tdDias = document.querySelector(".infoDias");
var tdRepetir = document.querySelector(".infoRepetir");
var fazeres = document.querySelectorAll(".fazer");
var tabela = document.querySelector("#tabelaAtividades");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionarAtividade");
    console.log(form);

    var fazer = obtemFazeres(form);

    adicionaAtividadeNaTabela(fazer);

    form.reset();
    
})

function obtemFazeres(form){
    var fazer = {
        atividade: form.atividade.value,
        dias: form.dias.value,
        repetir: form.repetir.value
    }
    return fazer;
}

function montaTr(fazer){
    var fazerTr = document.createElement("tr");
    fazerTr.classList.add("fazer");

    fazerTr.appendChild(montaTd(fazer.atividade, "infoAtividade"));
    fazerTr.appendChild(montaTd(fazer.dias, "infoDias"));
    fazerTr.appendChild(montaTd(fazer.repetir, "infoRepetir"));

    return fazerTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionaAtividadeNaTabela(fazer) {
    var fazerTr = montaTr(fazer);
    var tabela = document.querySelector("#tabelaAtividades");
    tabela.appendChild(fazerTr);
}

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    setTimeout(function() {
        alert("A atividade foi removido!");
    }, 600);

});

