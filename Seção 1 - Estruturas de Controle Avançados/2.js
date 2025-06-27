// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();


const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (true) {
    let numero = prompt("Adivinhe o número (entre 1 e 100): ");
    let palpite = parseInt(numero);
    tentativas++;

    if (isNaN(numero)|| palpite < 1 || palpite > 100) {
        console.log("Número inválido, selecione de 1 a 100");
        continue;
    }

    if (palpite === numeroAleatorio) {
        console.log(`Parabens o número correto é ${numeroAleatorio} você tentou ${tentativas} vez(es).`);
        acertou = true;
    } else if (palpite < numeroAleatorio) {
        console.log("Mais alto");
    } else {
        console.log("Mais baixo");
    }
}
