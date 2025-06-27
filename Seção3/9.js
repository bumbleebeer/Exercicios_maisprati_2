// 9. Conversão Entre Formatos
// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.


function paresParaObjeto(pares) {
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor;
        return obj;
    }, {});
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

const pares = [
    ["Numero 1", "Numero 2"],
    ["Numero 3", "Numero 4"],
    ["Numero 5", "Numero 6"]
];

const objeto = paresParaObjeto(pares);
console.log("Objeto convertido:", objeto);

const paresConvertidos = objetoParaPares(objeto);
console.log("Pares novamente:", paresConvertidos);
