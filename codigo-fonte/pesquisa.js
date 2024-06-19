function pesquisa() {
    // Obtém o valor do campo de pesquisa
    var input = document.getElementById('resultado-pesquisa');
    var filter = input.value.toUpperCase();

    // Obtém todos os cards
    var cards = document.querySelectorAll('.card');

    // Loop através de todos os cards e mostra apenas aqueles que contêm o texto de pesquisa
    cards.forEach(card => {
        var productName = card.querySelector('.nome-produto');
        var productDescription = card.querySelector('h2');

        // Verifica se o nome do produto ou a descrição do produto contêm o texto de pesquisa
        if (productName.innerText.toUpperCase().indexOf(filter) > -1 || productDescription.innerText.toUpperCase().indexOf(filter) > -1) {
            card.style.display = ''; // Mostra o card
        } else {
            card.style.display = 'none'; // Oculta o card
        }
    });
}