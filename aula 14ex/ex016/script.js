function verificar() {
    let ini = window.document.getElementById('in')
    let fim = window.document.querySelector('input#fim')
    let passo = window.document.getElementById('cond')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Dados incompletos!')
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            // Contagem crescente
           for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} &#x1F449 ` 
        }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} &#x1F449 `
            }
        } 
        res.innerHTML += `&#x1F3C1`
    }
}