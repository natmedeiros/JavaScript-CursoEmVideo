function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano -Number(formAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 1) {
                // bebe
                img.setAttribute('src', 'img/fotobebe.png')
            } else if (idade <= 12) {
                // Criança
                img.setAttribute('src', 'img/fotomenino.png')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'img/fotohomemjovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'img/fotohomem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/fotohomemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 1) {
                // bebe
                img.setAttribute('src', 'img/fotobebe.png')
            } else if (idade <= 12) {
                // Criança
                img.setAttribute('src', 'img/fotomenina.png')
            } else if (idade < 30) {
                // Jovem
                img.setAttribute('src', 'img/fotomulherjovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'img/fotomulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}