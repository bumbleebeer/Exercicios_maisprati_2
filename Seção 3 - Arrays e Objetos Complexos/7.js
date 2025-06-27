// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
    { nome: "Mouse", preco: 200 },
    { nome: "Teclado", preco: 199 },
    { nome: "Monitor", preco: 800 },
    { nome: "Placa de Video", preco: 3000 },
    { nome: "Death Stranding 2", preco: 499 },
    { nome: "SSD", preco: 150 },
];

function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

const nomes = nomesOrdenadosPorPreco(produtos);
console.log(nomes)