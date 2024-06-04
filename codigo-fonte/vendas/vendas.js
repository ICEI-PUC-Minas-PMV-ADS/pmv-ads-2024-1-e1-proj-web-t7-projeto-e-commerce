 // Recuperar os dados das vendas do localStorage
 const vendas = JSON.parse(localStorage.getItem('compras')) || [];

 // Selecionar o elemento tbody onde as vendas serão inseridas
 const listaVendas = document.getElementById('lista-vendas');

 // Iterar sobre as vendas e exibi-las na tabela
 vendas.forEach(function(venda) {
     const row = document.createElement('tr');

     const dataCompra = new Date(venda.dataCompra).toLocaleDateString();
     const nomeCliente = venda.nome;
     const enderecoEntrega = `${venda.endereco}, ${venda.numero}, ${venda.cidade}, ${venda.estado}, ${venda.cep}`;
     const itensComprados = venda.itensComprados.map(item => `${item.descricao} (${item.quantidade})`).join(', ');
     const totalCompra = venda.itensComprados.reduce((total, item) => total + item.total, 0).toFixed(2);

     row.innerHTML = `
         <td>${dataCompra}</td>
         <td>${nomeCliente}</td>
         <td>${enderecoEntrega}</td>
         <td>${itensComprados}</td>
         <td>R$ ${totalCompra}</td>
     `;

     listaVendas.appendChild(row);
 });
