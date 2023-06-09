function tabuada() {
let num  = document.getElementById('txtn')
let sel = document.getElementById('txts')
if (num.value.length == 0 ) {
    window.alert('erro faltam numeros')
} else {
    let n = Number(num.value)
    sel.innerHTML = ''
    let c = 1
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} + ${c} = ${n+c} `
        sel.appendChild(item)
        c++
        }
    }
}