document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Evita o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Limpa a mensagem anterior e a esconde
    messageDiv.style.display = 'none';
    messageDiv.textContent = '';
    messageDiv.className = '';

    // Envia os dados para o endpoint de login
    fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email, // CORRIGIDO: O nome da propriedade deve ser 'email'
            "password": password
        })
    })
    .then(response => {
        // Verifica se a resposta foi bem-sucedida (status 200 OK)
        if (response.ok) {
            // Se o login for bem-sucedido
            messageDiv.style.display = 'block';
            messageDiv.textContent = 'Login realizado com sucesso!';
            messageDiv.classList.add('success');
            // Redirecione ou faça algo após o sucesso
        } else {
            // Se o login falhar, a resposta não será OK
            return response.json().then(errorData => {
                throw new Error(errorData.message || 'Falha no login. Verifique suas credenciais.');
            });
        }
    })
    .catch(error => {
        // Trata qualquer erro de rede ou de API
        messageDiv.style.display = 'block';
        messageDiv.textContent = error.message;
        messageDiv.classList.add('error');
    });
});