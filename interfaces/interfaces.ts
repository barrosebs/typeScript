function saudarComOla(pessoa: {nome: string}){
    console.log('Olá, '+ pessoa.nome);
}

const pessoa = {
    nome: 'Eduardo',
    idade: 27
}

saudarComOla(pessoa)