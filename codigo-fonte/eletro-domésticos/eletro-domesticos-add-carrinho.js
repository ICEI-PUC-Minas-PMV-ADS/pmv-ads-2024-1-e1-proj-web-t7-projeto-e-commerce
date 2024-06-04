// Objeto para armazenar os itens do carrinho
let carrinhoItens = {};

// Carrega os itens do carrinho do localStorage ao iniciar a página
document.addEventListener("DOMContentLoaded", () => {
    const itensSalvos = localStorage.getItem("carrinhoItens");
    if (itensSalvos) {
        carrinhoItens = JSON.parse(itensSalvos);
        atualizaCarrinho();
    }
});

// Função para adicionar um item ao carrinho
function adiciona_carrinho(event) {
    const botao = event.target;
    const cardProduto = botao.closest('.card');
    const nomeProduto = cardProduto.querySelector('.nome-produto').innerText;
    const precoProduto = parseFloat(cardProduto.querySelector('.preco').innerText.replace("R$ ", "").replace(",", "."));
    const descricaoProduto = cardProduto.querySelector('h2').innerText;
    const imagemProduto = cardProduto.querySelector('.img-prod').src;

    // Se o produto já estiver no carrinho, aumenta a quantidade
    if (carrinhoItens[nomeProduto]) {
        carrinhoItens[nomeProduto].quantidade++;
    } else {
        // Se o produto não estiver no carrinho, adiciona com quantidade 1
        carrinhoItens[nomeProduto] = { preco: precoProduto, quantidade: 1, descricao: descricaoProduto, imagem: imagemProduto };
    }

    // Salva os itens do carrinho no localStorage
    localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));

    // Atualiza a exibição do carrinho
    atualizaCarrinho();
}

// Função para remover um item do carrinho
function removeItemCarrinho(event) {
    const botaoRemover = event.target;
    const nomeProduto = botaoRemover.dataset.nome;

    // Se a quantidade do item for maior que 1, diminui a quantidade
    if (carrinhoItens[nomeProduto].quantidade > 1) {
        carrinhoItens[nomeProduto].quantidade--;
    } else {
        // Se a quantidade for 1, remove completamente do carrinho
        delete carrinhoItens[nomeProduto];
    }

    // Salva os itens do carrinho no localStorage
    localStorage.setItem("carrinhoItens", JSON.stringify(carrinhoItens));

    // Atualiza a exibição do carrinho
    atualizaCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizaCarrinho() {
    const tbody = document.querySelector("#itens-carrinho tbody");
    const totalCarrinho = document.querySelector("#total-carrinho");

    // Limpa o corpo da tabela do carrinho
    tbody.innerHTML = "";

    // Calcula o total do carrinho
    let total = 0;

    // Adiciona os itens ao carrinho e calcula o total
    for (const nomeProduto in carrinhoItens) {
        const item = carrinhoItens[nomeProduto];
        const row = document.createElement("tr");

        // Imagem
        const imgCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = item.imagem;
        img.alt = nomeProduto;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        // Nome
        const nomeCell = document.createElement("td");
        nomeCell.textContent = nomeProduto;
        row.appendChild(nomeCell);

        // Descrição
        const descricaoCell = document.createElement("td");
        descricaoCell.textContent = item.descricao;
        row.appendChild(descricaoCell);

        // Preço
        const precoCell = document.createElement("td");
        precoCell.textContent = `R$ ${item.preco.toFixed(2)}`;
        row.appendChild(precoCell);

        // Quantidade
        const quantidadeCell = document.createElement("td");
        quantidadeCell.textContent = item.quantidade;
        row.appendChild(quantidadeCell);

        // Subtotal
        const subtotalCell = document.createElement("td");
        const subtotal = item.preco * item.quantidade;
        subtotalCell.textContent = `R$ ${subtotal.toFixed(2)}`;
        row.appendChild(subtotalCell);

        // Botão para remover o item
        const removerCell = document.createElement("td");
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("btn", "btn-danger"); // Adiciona a classe de estilo para torná-lo vermelho
        botaoRemover.dataset.nome = nomeProduto; // Define o nome do item no dataset
        botaoRemover.addEventListener('click', removeItemCarrinho);
        removerCell.appendChild(botaoRemover);
        row.appendChild(removerCell);

        tbody.appendChild(row);

        total += subtotal;
    }

    // Atualiza o total do carrinho
    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona o evento de clique aos botões "Adicionar ao carrinho"
const botoesAdicionar = document.querySelectorAll('.add-carrinho');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', adiciona_carrinho);
});

// Função para recuperar os dados da última compra
document.addEventListener('DOMContentLoaded', function() {
    function recuperarCompras() {
        const compras = JSON.parse(localStorage.getItem('compras')) || [];
        compras.forEach(compra => {
            adicionarCompraATabela(compra);
        });
    }

    recuperarCompras(); // Chama a função para exibir todas as compras realizadas

    // Função para adicionar uma compra à tabela de compras
    function adicionarCompraATabela(compra) {
        const tbody = document.querySelector('#compras-feitas tbody');

        // Verifica se há itens comprados na compra
        if (compra.itensComprados && compra.itensComprados.length > 0) {
            // Cria uma nova linha na tabela com os detalhes da compra
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${compra.itensComprados[0].imagem}" alt="Imagem do Produto"></td>
                <td>${compra.itensComprados[0].descricao}</td>
                <td>${compra.itensComprados[0].quantidade}</td>
                <td>R$ ${compra.itensComprados[0].precoUnitario.toFixed(2)}</td>
                <td>R$ ${compra.itensComprados[0].total.toFixed(2)}</td>
                <td>${compra.endereco}, ${compra.numero}, ${compra.cidade} - ${compra.estado}, ${compra.cep}</td>
            `;
            tbody.appendChild(row);
        }
    }
});
