//GET3

function fazerLogin(){
    const nome = document.getElementById('nomeL').value;
    const senha = document.getElementById('senhaL').value;

    fetch('pessoas/')
    .then(response => response.json())
    .then(data => {

        //Esse p seria para o parametro do fin (Procurar), Função CallBack
        const pessoa = data.find(p => p.nome === nome && p.senha == senha);

        if(pessoa){
            window.location.href = "bemvindo.html";

        }else{
            alert('Nome e idade não encontrado no Banco de Dados')
        }
    })
}