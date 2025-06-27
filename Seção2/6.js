// 6. Memorization
// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

const prompt = require('prompt-sync')();

function memorize(fn) {  
    const cache = new Map();
        return function (...args) {
        const key = JSON.stringify(args)

        if (cache.has(key)) {
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }  
}


// Exemplo na prática

let n = 35

function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
}

const fastFib = memorize(function fibonacci(n) {
    if (n < 2) return n;
    return fastFib(n - 1) + fastFib(n - 2)
})

console.time("Tempo de execução do Fibonnaci")
let fibon = fibonacci(n)
console.timeEnd("Tempo de execução do Fibonnaci")

console.log("")

console.time("Tempo de execução do Fibonnaci com Memorize")
let fibonMemo = fastFib(n)
console.timeEnd("Tempo de execução do Fibonnaci com Memorize")