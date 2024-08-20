const form = document.getElementById('formularioTeste')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    axios.post('http://localhost:3000/usuarios', {
        email,
        senha
    })
    .then((response) => {
        console.log('Resposta do servidor', response)
    })
    .catch(function (error) {
        console.log('Erro ao enviar os dados', error)
    })

})