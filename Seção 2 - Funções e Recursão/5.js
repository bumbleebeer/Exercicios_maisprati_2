// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId

    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

let texto = "Olá Mundo"

function enviarTexto(texto){
    console.log("Texto", texto)
}

const enviarTextoDelay = debounce(enviarTexto, 4000)

// Simular envio de varios textos abaixo sem delay
enviarTexto(texto)
enviarTexto(texto)
enviarTexto(texto)

console.log("")

// com delay
enviarTextoDelay(texto)
enviarTextoDelay(texto)
enviarTextoDelay(texto)
