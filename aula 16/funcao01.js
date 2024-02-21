function parimpar(n) {
    if (n%2==0) { // n%2==0 é utilizado para saber se um numero é par ou impar, lê-se: n dividido por 2 tem resto 0.
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimpar(423))