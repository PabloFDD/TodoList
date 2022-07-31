var tabela = document.querySelector("#tabelaAtividades");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

    setTimeout(function() {
        alert("A atividade foi removida!");
    }, 600);

});