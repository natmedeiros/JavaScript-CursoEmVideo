function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA!!
    img.src = 'img/manha.png'
    document.body.style.background = '#BF9F65'
} else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!!
    img.src = 'img/tarde.png'
    document.body.style.background = '#623217'
} else {
    // BOA NOITE!!
    img.src = 'img/noite.png'
    document.body.style.background = '#7A4051'
}
}