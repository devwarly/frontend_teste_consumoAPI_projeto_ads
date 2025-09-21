document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const userData = {
        nome: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        senha: document.getElementById('userPassword').value,
        telefone: document.getElementById('userPhone').value,
        endereco: {
            cep: document.getElementById('userCep').value,
            rua: document.getElementById('userRua').value,
            numero: document.getElementById('userNumero').value,
            bairro: document.getElementById('userBairro').value,
            cidade: document.getElementById('userCidade').value,
            estado: document.getElementById('userEstado').value
        }
    };

    fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        const responseMessage = document.getElementById('responseMessage');
        if (response.ok) {
            responseMessage.className = 'success';
            responseMessage.textContent = 'Usuário cadastrado com sucesso!';
        } else {
            responseMessage.className = 'error';
            responseMessage.textContent = 'Erro ao cadastrar usuário. Verifique os dados.';
        }
        return response.json();
    })
    .then(data => console.log('Resposta do backend:', data))
    .catch(error => {
        console.error('Erro na requisição:', error);
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.className = 'error';
        responseMessage.textContent = 'Erro de conexão com a API.';
    });
});

document.getElementById('companyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const companyData = {
        razaoSocial: document.getElementById('companyRazaoSocial').value,
        nomeFantasia: document.getElementById('companyNomeFantasia').value,
        cnpj: document.getElementById('companyCnpj').value,
        email: document.getElementById('companyEmail').value,
        senha: document.getElementById('companyPassword').value,
        telefone: document.getElementById('companyPhone').value,
        endereco: {
            cep: document.getElementById('companyCep').value,
            rua: document.getElementById('companyRua').value,
            numero: document.getElementById('companyNumero').value,
            bairro: document.getElementById('companyBairro').value,
            cidade: document.getElementById('companyCidade').value,
            estado: document.getElementById('companyEstado').value
        },
        descricao: document.getElementById('companyDescricao').value
    };

    fetch('http://localhost:8080/api/empresas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(companyData)
    })
    .then(response => {
        const responseMessage = document.getElementById('responseMessage');
        if (response.ok) {
            responseMessage.className = 'success';
            responseMessage.textContent = 'Empresa cadastrada com sucesso!';
        } else {
            responseMessage.className = 'error';
            responseMessage.textContent = 'Erro ao cadastrar empresa. Verifique os dados.';
        }
        return response.json();
    })
    .then(data => console.log('Resposta do backend:', data))
    .catch(error => {
        console.error('Erro na requisição:', error);
        const responseMessage = document.getElementById('responseMessage');
        responseMessage.className = 'error';
        responseMessage.textContent = 'Erro de conexão com a API.';
    });
});