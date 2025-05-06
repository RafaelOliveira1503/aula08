const cep = document.getElementById('cep')
const rua = document.getElementById('rua')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const uf = document.getElementById('uf')


function buscarCep () {
    if (cep.ariaValueMax.length == 8) {
        fetch(`viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta => resposta.json())
        .then(resposta => {
            rua.value = resposta.logradouro;
            bairro.value = resposta.bairro;
            cidade.value = resposta.localidade;
            uf.value = resposta.estado;
        })
    }




}