document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o ouvinte de evento para formatar o CEP
    const cepInput = document.getElementById('cep');
        
    cepInput.addEventListener('input', function() {
        let cep = cepInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        
        // Adiciona o hífen após os primeiros 5 dígitos, se necessário
        if (cep.length > 5) {
            cep = cep.substring(0, 5) + '-' + cep.substring(5, 9);
        }
        
        // Limita o campo do CEP para 9 caracteres (incluindo o hífen)
        if (cep.length > 9) {
            cep = cep.substring(0, 9);
        }
        
        cepInput.value = cep; // Atualiza o valor do campo do CEP
        clearError('cep'); // Limpa a mensagem de erro
    });

    // Adiciona o ouvinte de evento para formatar o número do cartão
    const cartaoInput = document.getElementById('numero-cartao');
        
    cartaoInput.addEventListener('input', function() {
        let cartao = cartaoInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
        
        // Adiciona um espaço a cada 4 dígitos
        cartao = cartao.replace(/(.{4})/g, '$1 ');

        // Limita o número do cartão para 19 caracteres (16 dígitos e 3 espaços)
        if (cartao.length > 19) {
            cartao = cartao.substring(0, 19);
        }
        
        cartaoInput.value = cartao; // Atualiza o valor do campo do número do cartão
        clearError('numero-cartao'); // Limpa a mensagem de erro
    });

    // Adiciona o ouvinte de evento para formatar a validade do cartão
    const validadeCartaoInput = document.getElementById('validade-cartao');

    validadeCartaoInput.addEventListener('input', function() {
        let validadeCartao = validadeCartaoInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

        // Adiciona a barra após os primeiros 2 dígitos (mês), se necessário
        if (validadeCartao.length > 2) {
            validadeCartao = validadeCartao.substring(0, 2) + '/' + validadeCartao.substring(2);
        }

        // Limita o campo da validade do cartão para 5 caracteres (incluindo a barra)
        if (validadeCartao.length > 5) {
            validadeCartao = validadeCartao.substring(0, 5);
        }

        validadeCartaoInput.value = validadeCartao; // Atualiza o valor do campo da validade do cartão

        // Verifica se o mês é válido (entre 1 e 12)
        const [mes, ano] = validadeCartao.split('/');
        const mesInt = parseInt(mes, 10); // Obtém o valor do mês como inteiro
        const anoInt = parseInt(ano, 10); // Obtém o valor do ano como inteiro

        if (mesInt < 1 || mesInt > 12 || (ano && anoInt < 24)) {
            validadeCartaoInput.setCustomValidity('Data de validade inválida.');
        } else {
            validadeCartaoInput.setCustomValidity(''); // Limpa a mensagem de validação personalizada
        }

        // Atualiza a exibição da mensagem de erro, se houver
        if (!validadeCartaoInput.checkValidity()) {
            showError('validade-cartao', validadeCartaoInput.validationMessage);
        } else {
            clearError('validade-cartao');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const finalizarCompraButton = document.getElementById('ir-comprar');

    finalizarCompraButton.addEventListener('click', function() {
        // Verificação de autenticação
        const usuarioLogado = verificarAutenticacao();
        if (!usuarioLogado) {
            alert('Você precisa estar logado para finalizar a compra.');
            window.location.href = 'login.html';
            return;
        }

        // Verifica se há itens no carrinho
        const itensCarrinho = document.querySelectorAll('#itens-carrinho tbody tr');
        if (itensCarrinho.length > 0) {
            window.location.href = 'pagamento.html';
        } else {
            alert('O carrinho está vazio! Adicione itens antes de finalizar a compra.');
        }
    });

    function verificarAutenticacao() {
        // Simulação de verificação de autenticação
        const token = localStorage.getItem('authToken'); // ou outra lógica de autenticação
        console.log('Token encontrado:', token); // Mensagem de depuração
        return !!token; // Retorna true se o token existir, false caso contrário
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const finalizarCompraButton = document.getElementById('finalizar-compra');

    if (finalizarCompraButton) {
        finalizarCompraButton.addEventListener('click', function() {
            // Realizar validação dos campos do formulário
            const isValid = validarFormulario();

            // Se o formulário for válido, então submeta o formulário programaticamente
            if (isValid) {
                // Salvar a compra
                salvarCompra();

                // Remover itens do carrinho
                localStorage.removeItem('carrinhoItens'); // Remove os itens do localStorage
                carrinhoItens = {}; // Limpa o objeto carrinhoItens
                atualizaCarrinho(); // Atualiza a exibição do carrinho

                alert("Compra finalizada com sucesso");
                
                // Redirecionar para a página principal após a compra
                window.location.href = 'home.html';
            }
        });
    }
});

// Função para salvar os dados da compra
function salvarCompra() {
    const itensCarrinho = [];
    const linhasCarrinho = document.querySelectorAll('#itens-carrinho tbody tr');

    // Coletar os dados dos itens do carrinho
    linhasCarrinho.forEach(function(linha) {
        const imagem = linha.querySelector('td:nth-child(1) img').src;
        const descricao = linha.querySelector('td:nth-child(2)').textContent.trim();
        const quantidade = parseInt(linha.querySelector('td:nth-child(5)').textContent.trim(), 10);
        const precoUnitario = parseFloat(linha.querySelector('td:nth-child(4)').textContent.replace('R$', '').trim());
        const total = parseFloat(linha.querySelector('td:nth-child(6)').textContent.replace('R$', '').trim());

        itensCarrinho.push({
            imagem: imagem,
            descricao: descricao,
            quantidade: quantidade,
            precoUnitario: precoUnitario,
            total: total
        });
    });

    const compra = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim(),
        endereco: document.getElementById('endereco').value.trim(),
        numero: document.getElementById('numero').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        estado: document.getElementById('estado').value,
        cep: document.getElementById('cep').value.trim(),
        numeroCartao: document.getElementById('numero-cartao').value.trim(),
        validadeCartao: document.getElementById('validade-cartao').value.trim(),
        cvv: document.getElementById('cvv').value.trim(),
        dataCompra: new Date().toISOString(), // Adiciona a data da compra
        itensComprados: itensCarrinho // Inclui os itens comprados
    };

    // Recupera o array de compras do localStorage, ou inicializa um novo array se não existir
    let compras = JSON.parse(localStorage.getItem('compras')) || [];

    // Adiciona a nova compra ao array
    compras.push(compra);

    // Armazena o array atualizado no localStorage 
    localStorage.setItem('compras', JSON.stringify(compras));
    console.log('Compra salva:', compra);
}



    function validarFormulario() {
        let isValid = true;

        // Campos a serem validados
       const campos = ['nome', 'email', 'endereco', 'numero', 'cidade', 'estado', 'cep', 'numero-cartao', 'validade-cartao', 'cvv'];

campos.forEach(function(id) {
    const input = document.getElementById(id);
    input.addEventListener('input', function() {
        clearError(id); // Limpa a mensagem de erro ao digitar novamente
    });
});


        // Validação do campo Nome
        const nome = document.getElementById('nome').value.trim();
        if (nome === '') {
            showError('nome', 'O nome é obrigatório.');
            isValid = false;
        } else if (/\d/.test(nome)) { // Verifica se há números no nome
            showError('nome', 'O nome não pode conter números.');
            isValid = false;
        } else {
            clearError('nome');
        }
    
        // Validação do campo Email
        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('email', 'O email é obrigatório.');
            isValid = false;
        } else {
            clearError('email');
        }

        // Validação do campo Endereço de Entrega
        const endereco = document.getElementById('endereco').value.trim();
        if (endereco === '') {
            showError('endereco', 'O endereço é obrigatório.');
            isValid = false;
        } else {
            clearError('endereco');
        }

        // Validação do campo Número
        const numero = document.getElementById('numero').value.trim();
        if (numero === '') {
            showError('numero', 'O número é obrigatório.');
            isValid = false;
        } else {
            clearError('numero');
        }

        // Validação do campo Cidade
        const cidade = document.getElementById('cidade').value.trim();
        if (cidade === '') {
            showError('cidade', 'A cidade é obrigatória.');
            isValid = false;
        } else if (/\d/.test(cidade)) { // Verifica se há números na cidade
            showError('cidade', 'A cidade não pode conter números.');
            isValid = false;
        } else {
            clearError('cidade');
        }

        // Validação do campo Estado
        const estado = document.getElementById('estado').value;
        if (estado === '') {
            showError('estado', 'Selecione o estado.');
            isValid = false;
        } else {
            clearError('estado');
        }

        // Validação do campo CEP
        const cep = document.getElementById('cep').value.trim();
        if (cep === '') {
            showError('cep', 'O CEP é obrigatório.');
            isValid = false;
        } else {
            clearError('cep');
        }

        // Validação do campo Número do Cartão
        const numeroCartao = document.getElementById('numero-cartao').value.trim();
        if (numeroCartao === '') {
            showError('numero-cartao', 'O número do cartão é obrigatório.');
            isValid = false;
        } else if (numeroCartao.length < 19) {
            showError('numero-cartao', 'O número do cartão deve ter 16 dígitos.');
            isValid = false;
        } else {
            clearError('numero-cartao');
        }

        // Validação do campo Data de Validade do Cartão
        const validadeCartao = document.getElementById('validade-cartao').value.trim();
        if (validadeCartao === '') {
            showError('validade-cartao', 'A data de validade do cartão é obrigatória.');
            isValid = false;
        } else {
            const [mes, ano] = validadeCartao.split('/');
            const mesInt = parseInt(mes, 10);
            const anoInt = parseInt(ano, 10);

            if (mesInt < 1 || mesInt > 12 || (ano && anoInt < 24)) {
                showError('validade-cartao', 'Data de validade inválida.');
                isValid = false;
            } else {
                clearError('validade-cartao');
            }
        }

        // Validação do campo CVV
        const cvv = document.getElementById('cvv').value.trim();
        
        
         // Verifica se o campo CVV está vazio
    if (cvv === '') {
        showError('cvv', 'O CVV é obrigatório.');
        isValid = false;
    }

    
    // Verifica se o campo CVV contém exatamente 3 dígitos e não contém letras
    else if (!/^\d{3}$/.test(cvv)) {
        showError('cvv', 'O número do CVV deve ter 3 dígitos e conter apenas números.');
        isValid = false;
    } else {
        clearError('cvv');
    }

    return isValid;
}

    // Função auxiliar para mostrar mensagens de erro
    function showError(inputId, message) {
        document.getElementById(inputId + '-error').textContent = message;
        document.getElementById(inputId).classList.add('input-invalid'); // Adiciona a classe de campo inválido
    }

    // Função auxiliar para limpar mensagens de erro
    function clearError(inputId) {
        document.getElementById(inputId + '-error').textContent = '';
        document.getElementById(inputId).classList.remove('input-invalid'); // Remove a classe de campo inválido
    }

  
