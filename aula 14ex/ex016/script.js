function verificar() {
    let n1 = window.document.getElementById('in')
    let n2 = window.document.querySelector('input#fim')
    let n3 = window.document.getElementById('cond')
    let res = window.document.getElementById('res')

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        window.alert('[ERRO] Dados incompletos!')
    } else {
        window.alert('TUDO OK!')
    }

    res.innerHTML = 'Contando: </br>'
    let i = Number(n1.value)
    let f = Number(n2.value)
    let p = Number(n3.value)

}