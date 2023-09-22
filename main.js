'use strict'

const cepInput = document.getElementById('cep')
cepInput.addEventListener('focusout', preencherCampos)

async function preencherCampos(){
    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    const cepInfo = await pegarCep(cepInput.value)

    endereco.value = cepInfo.logradouro
    bairro.value = cepInfo.bairro
    cidade.value = cepInfo.localidade
    estado.value = cepInfo.uf
}

async function pegarCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const cepInfo = response.json()

    return cepInfo
}