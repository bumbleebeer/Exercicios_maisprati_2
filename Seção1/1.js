// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require('prompt-sync')(); 

function ehDataValida(dia, mes, ano) {

const data = new Date(ano, mes - 1, dia);
    return (
        data.getFullYear() === ano &&
        data.getMonth() === mes - 1 &&
        data.getDate() === dia
    );
}

console.log("Informe a data abaixo: ")

let dia = Number(prompt("Dia: "))
let mes = Number(prompt("Mes: "))
let ano = Number(prompt("Ano: "))

if(ehDataValida(dia, mes, ano)) {
    console.log(`${dia}/${mes}/${ano} é uma data válida`)
}   else {
    console.log(`${dia}/${mes}/${ano} não é uma data válida`)
}