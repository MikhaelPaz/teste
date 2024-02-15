let d1 = []
let d2 = []

function salvar () {
    const p = document.querySelector('.p').value
    const p2 = document.querySelector('.p2').value
    
    localStorage.setItem('valor1', p);
    localStorage.setItem('valor2', p2);
    d1.push(p)
    d2.push(p2)
    
}

function mostrar() {
    console.log(localStorage.valor1, localStorage.valor2);
}
function mostrar1() {
    var dado1 = localStorage.valor1;
    var h1 = document.createElement('h1');
    var text = document.createTextNode(dado1);
    h1.appendChild(text);
    var divAtual = document.getElementById('div1');
    document.body.appendChild(h1, divAtual);

    var dado2 = localStorage.valor2;
    var h1 = document.createElement('h1');
    var text = document.createTextNode(dado2);
    h1.appendChild(text);
    var divAtual = document.getElementById('div1');
    document.body.appendChild(h1, divAtual);
}
