// Selecionando os elementos necessários para o menu hamburger
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); // Seleciona todos os links do menu

// Adicionando o evento de clique no botão hamburguer
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');  // Mostra ou esconde o menu
    hamburger.classList.toggle('active');  // Altera o estilo do botão hamburguer para "X"
});

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// botão voltar ao topo
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const sobreSection = document.getElementById('sobre');

    window.addEventListener('scroll', () => {
        if (window.scrollY >= sobreSection.offsetTop) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

