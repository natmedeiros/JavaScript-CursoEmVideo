    let num = document.getElementById('addNum')
    let list = document.querySelector('select#lista') 
    let res = document.getElementById('result')
    let valores = []

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }
    
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado na lista!')
    }
     
    //LIMPAR O CAMPO DE DIGITAÇÂO
    num.value = ''
    //CURSOR DO CAMPO DE DIGITAÇÂO
    num.focus()
}

function finalisar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `</p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

//LIMPAR A PÁGINA
function limpar() {
    location.reload()
}