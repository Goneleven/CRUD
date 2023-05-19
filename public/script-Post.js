//Função que envia os dados para o servidor (POST)

function enviarDados() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const areaDeInteresse = document.getElementById('areaDeInteresse').value;
    const dispDeTempo = document.getElementById('dispDeTempo').value;
    const expAnterior = document.getElementById('expAnterior').value;
    const inforADD = document.getElementById('inforADD').value;

    //Para envio

    fetch('pessoas', {
        method: 'POST',

        headers: {
            'Content-Type':
                'application/json'

            //Tipo de conteúdo enviado (JSON)
        },

        body: JSON.stringify({
            nome: nome, sobrenome: sobrenome, email: email, senha: senha, cpf: cpf, telefone: telefone, areaDeInteresse: areaDeInteresse,
            dispDeTempo: dispDeTempo, expAnterior: expAnterior, inforADD: inforADD
        })
    })


}