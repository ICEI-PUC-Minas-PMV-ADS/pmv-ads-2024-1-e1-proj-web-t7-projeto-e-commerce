// Dados do administrador
const adminData = {
    email: "estavaoadmin@dominio.com",
    senha: "Admin123" // Coloque a senha real do administrador aqui
};

// Função para verificar o login do usuário
function check_login() {
    // Recupera as informações de login fornecidas pelo usuário
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;

    // Recupera as informações armazenadas no localStorage
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('password');

    // Verifica se as informações de login fornecidas correspondem às armazenadas ou ao administrador
    if ((email === storedEmail && senha === storedSenha) || (email === adminData.email && senha === adminData.senha)) {
        // Login bem-sucedido
        alert("Login bem-sucedido!");

        // Salva o email e a senha no localStorage
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
        
        // Salva o token de autenticação no localStorage
        const authToken = 'seuTokenDeAutenticacao'; // Cria ou obtenha um token de autenticação
        localStorage.setItem('authToken', authToken);

        // Redireciona para a página inicial ou outra página desejada
        window.location.href = "home.html";
    } else {
        // Login falhou
        alert("Email ou senha incorretos. Por favor, tente novamente.");
        console.log(email);
        console.log(senha);
    }
}

// Função para limpar todos os dados do localStorage
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

// Função para verificar se o usuário logado é o administrador
function isAdmin() {
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');
    return storedEmail === adminData.email && storedSenha === adminData.senha;
}

// Função para controlar a visibilidade do botão
function controlarVisibilidadeBotao() {
    const botao = document.getElementById('Pagina-vendas');
    if (!isAdmin()) {
        botao.style.display = 'none';
    } else {
        botao.style.display = 'block'; // Mostra o botão se o usuário for o administrador
    }
}

// Verifica automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    controlarVisibilidadeBotao();
});
