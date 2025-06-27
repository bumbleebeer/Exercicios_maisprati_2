// 4. Fatorial Recursivo
// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

const prompt = require('prompt-sync')();

let n = Number(prompt("Insira um numero: "))

function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não definido para números negativos.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(n));

