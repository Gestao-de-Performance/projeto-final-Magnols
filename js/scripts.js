const botoesNavegacao = document.querySelectorAll('.btn-navegacao');

botoesNavegacao.forEach(btn => {
    btn.addEventListener('click', function() {
        const secaoAlvo = document.querySelector(this.dataset.secao);
        secaoAlvo.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', function() {
    const botoesNavegacao = document.querySelector('.botoes-navegacao');
    const scrollTop = window.pageYOffset;

    if (scrollTop > 0) {
        botoesNavegacao.classList.remove('escondido');
    } else {
        botoesNavegacao.classList.add('escondido');
    }
});



