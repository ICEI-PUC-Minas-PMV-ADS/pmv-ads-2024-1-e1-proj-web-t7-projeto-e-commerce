function check_login() {
    // Recupera as informações de login fornecidas pelo usuário
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    // Recupera as informações armazenadas no localStorage
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('password');

    // Verifica se as informações de login fornecidas correspondem às armazenadas
    if (email === storedEmail && senha === storedSenha) {
        // Login bem-sucedido
        alert("Login bem-sucedido!");
        // Redireciona para a página inicial ou outra página desejada
        window.location.href = "home.html";
        
    // Salva o token de autenticação no localStorage
    const authToken = 'seuTokenDeAutenticacao'; // Cria ou obtenha um token de autenticação
    localStorage.setItem('authToken', authToken);


    } else {
        // Login falhou
        alert("Email ou senha incorretos. Por favor, tente novamente.");
        console.log(email)
        console.log(senha)
    }
}
function limparLocalStorage() {
    localStorage.clear(); // Limpa todos os dados do localStorage
}
// Função para fazer logout
function logout() {
    // Remove o token de autenticação do localStorage
    localStorage.removeItem('authToken');
    // Limpa todos os dados do localStorage
    limparLocalStorage();
    // Mostra um alerta informando que o usuário foi deslogado
    alert("Você foi deslogado.");
    // Redireciona o usuário para a página de login
    window.location.href = "login.html";
}
