function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // limpando a area antes de garar outra tabuada
        while (c <= 10) {
            let item = document.createElement('option') // Cria o elemento option dinamicaente
            item.text = `${n} x ${c} = ${n*c}` // texto escrito de cada item
            item.value = `tab${c}` // Criando  um  value para cada option
            tab.appendChild(item) // Adicionar um elemento Filho
            c++
        }
    }
}