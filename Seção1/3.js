// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')();

const texto = prompt("Digite uma frase: ");

const palavras = texto.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
        if (palavras[i] === palavras[j]) {
            contador++;
        }
    }

    if (contador === 1) {
        unicas.push(palavras[i]);
    }
}

console.log("Palavras únicas:", unicas);
