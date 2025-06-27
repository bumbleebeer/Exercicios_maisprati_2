// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    { cliente: "Felipe", total: 100 },
    { cliente: "Felipe", total: 200 },
    { cliente: "Samela", total: 150 },
    { cliente: "Kelen", total: 300 },
    { cliente: "Samela", total: 50 }
];

const somaPedidos = vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
    
}, {});

console.log(somaPedidos);