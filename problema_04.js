var sum = 0;
const faturamento = [
    { estado: "São Paulo", valor_faturamento: 67836.43 },
    { estado: "Rio de Janeiro", valor_faturamento: 36678.66 },
    { estado: "Minas Gerais", valor_faturamento: 29299.88 },
    { estado: "Espírito Santo", valor_faturamento: 27165.48 },
    { estado: "Outros", valor_faturamento: 19849.53 }
]




for (let i = 0; i < faturamento.length; i++) {
    sum = sum + (faturamento[i].valor_faturamento)
}

faturamento.forEach(indice => {
    console.log(indice.estado + " representa(m) " + Math.round((indice.valor_faturamento/sum)*100) + "% do faturamento total da distribuidora. ")
})



