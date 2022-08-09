var btnAdd = document.querySelector('.addAtividade');

btnAdd.addEventListener('click', add);

function add(){
    let novaAtividade = window.prompt('Digite o nome da atividade: ');
    console.log(novaAtividade);
    event.preventDefault();
    let select = document.querySelector('#atividade');

    let opt = document.createElement('option');
    opt.textContent = novaAtividade;
    opt.setAttribute('value', novaAtividade);
    opt.setAttribute('maxlength', '20');

    select.appendChild(opt);
}