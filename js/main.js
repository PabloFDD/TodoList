var botaoAdicionar = document.querySelector("#adicionar");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#adicionarAtividade");

    var fazer = obtemFazeres(form);

    adicionaAtividadeNaTabela(fazer);

    form.reset();

    document.querySelector('#atividade').focus();
    
})
function obtemFazeres(form){
    if(form.repetir.value != '' && isNaN(form.dias.value) == false && form.dias.value >= 1 && form.dias.value <= 7){
        var fazer = {
            atividade: form.atividade.value,
            dias: parseInt(form.dias.value),
            repetir: form.repetir.value
        }
        return fazer;
    }else{
        alert('Preencha todos os campos corretamente!');
    }
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

var adicionaAtividadeNaTabela = (fazer) =>{
    var fazerTr = montaTr(fazer);
    tabela.appendChild(fazerTr);
}