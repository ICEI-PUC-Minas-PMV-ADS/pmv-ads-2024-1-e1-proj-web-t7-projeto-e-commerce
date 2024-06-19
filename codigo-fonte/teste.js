// Recupera o histórico de compras do localStorage
const historicoCompras = JSON.parse(localStorage.getItem('historicoCompras')) || [];

// Itera sobre cada compra no histórico
historicoCompras.forEach(function(compra, index) {
    console.log('Compra #' + (index + 1) + ':');
    console.log('Data da compra:', compra.dataCompra);

    // Itera sobre cada item comprado na compra atual
    compra.itensComprados.forEach(function(item, itemIndex) {
        console.log('Item #' + (itemIndex + 1) + ':');
        console.log('Imagem:', item.imagem);
        console.log('Descrição:', item.descricao);
        console.log('Quantidade:', item.quantidade);
        console.log('Preço Unitário:', item.precoUnitario);
        console.log('Total:', item.total);
        console.log('Endereço de Entrega:', item.endereco);
    });
});