export function sum(array) {
    return array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
}

export function product(array) {
    const produto = array.reduce((acc, num) => acc * num, 1)
    return produto
}

export function sumOdds(array) {
    const somaImpares = array
        .filter(num => num%2 !== 0)
        .reduce((soma, num) => soma + num, 0)
    return somaImpares
}