let slideAtual = 0

function mudarSlide(direcao) {
    const containerSlides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    slideAtual += direcao;

    if (slideAtual >= totalSlides) {
        slideAtual = o
    } else if (slideAtual < 0) {
        slideAtual = totalSlides-1;
    }

    const deslocamento = -slideAtual * 100;
    containerSlides.style.transform = `translateX(${deslocamento}%)`;

}