    let num = document.getElementById('addNum')
    let list = document.querySelector('#lista') 
    let arr = [list]
    
    function adicionar() {
    if (num.value < 1 || num.value > 100) {
        alert('Número já adiconado ou inválido!')
    }
    if (num.value >= 1 || num.value <= 100) {
        list.innerHTML += `Número ${num.value} adicionado! \n`
    }
}

function fim() {
    let quant = arr.length
    let vMaior = Math.max.apply(null, arr)
    let vMenor = Math.min.apply(null, arr)
    let soma = 0

    document.write(`Ao todo, temos ${quant} números cadastrados.`)
    document.write(`O maior valor informado foi ${vMaior}.`)
    document.write(`O menor valor informado foi ${vMenor}.`)

    for (v == 0; v < arr.length; v++) {
        soma += arr[v]
        document.write(`Somando todos os valores, temos ${soma}.`)
    }

    
}