//O Delete

function deletarDados() {
    const cpf = document.getElementById('cpf').value;

    fetch('pessoas')
        .then(response => response.json())
        .then(data => {
            data.forEach(objeto => {
                if (objeto.cpf === cpf) {
                    fetch(`pessoas/${objeto.id}`, {
                        method: 'DELETE'
                    })
                }
            })

        })


}

//GET

function buscarDados() {
    const cpf = document.getElementById('cpfAtualizar').value;

    fetch('pessoas', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf)
            if (pessoaEncontrada) {
                document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
                document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha
                document.getElementById('sobrenomeAtualizar').value = pessoaEncontrada.sobrenome
                document.getElementById('cpfAtualizar').value = pessoaEncontrada.cpf
                document.getElementById('emailAtualizar').value = pessoaEncontrada.email
                document.getElementById('telefoneAtualizar').value = pessoaEncontrada.telefone
                document.getElementById('areaDeInteresseAtualizar').value = pessoaEncontrada.areaDeInteresse
                document.getElementById('dispDeTempoAtualizar').value = pessoaEncontrada.dispDeTempo
                document.getElementById('expAnteriorAtualizar').value = pessoaEncontrada.expAnterior
                document.getElementById('inforADDAtualizar').value = pessoaEncontrada.inforADD
                document.getElementById('id').value = pessoaEncontrada.id;
            } else {
                alert('Pessoa Não Encontrada!');
            }
        })

}

//PUT

function atualizarDados() {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('nomeAtualizar').value;
    const senha = document.getElementById('senhaAtualizar').value;
    const sobrenome = document.getElementById('sobrenomeAtualizar').value;
    const email = document.getElementById('emailAtualizar').value;
    const cpf = document.getElementById('cpfAtualizar').value;
    const telefone = document.getElementById('telefoneAtualizar').value;
    const areaDeInteresse = document.getElementById('areaDeInteresseAtualizar').value;
    const dispDeTempo = document.getElementById('dispDeTempoAtualizar').value;
    const expAnterior = document.getElementById('expAnteriorAtualizar').value;
    const inforADD = document.getElementById('inforADDAtualizar').value;

    fetch(`pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome, senha: senha, sobrenome: sobrenome, email: email, telefone: telefone, areaDeInteresse: areaDeInteresse,
            dispDeTempo: dispDeTempo, expAnterior: expAnterior, inforADD: inforADD, cpf: cpf })
    })
        .then(response => response.json())

}