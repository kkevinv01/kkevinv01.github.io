let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');
let images = document.querySelectorAll('.carousel .slide img');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let counter;
let heightCarousel;



// offsetWidth devuelve el valor de la propiedad width del elemento

function setSizes() {

    counter = 0;
    carousel.style.height = '90vh';
    heightCarousel = carousel.offsetHeight; // devuelve el valor de la propiedad height

    for (i = 0; i < images.length; i++) {
        if(images[i].offsetHeight < heightCarousel) {
            heightCarousel = images[i].offsetHeight;
        }
    }

    carousel.style.height = heightCarousel + 'px';

    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }

    leftArrow.style.display = 'none';
}

function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    setSizes(); // Llama a la función inicial para establecer la posición left de cada slide
}

// offsetLeft devuelve el valor de la propiedad left del elemento

function nextSlide() {
    counter++;
    updateArrowState();
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left =  slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}

function prevSlide() {
    counter--;
    updateArrowState();
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left =  slides[i].offsetLeft - carousel.offsetWidth + 'px';
    }
}

function updateArrowState() {
    if(counter !== 0) {
        leftArrow.style.display = 'block';
    } else {
        leftArrow.style.display = 'none';
    }
    if(counter === slides.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'block';
    }
    rightArrow.style.pointerEvents = 'none';
    leftArrow.style.pointerEvents = 'none';
    setTimeout(() => {
        rightArrow.style.pointerEvents = 'auto';
        leftArrow.style.pointerEvents = 'auto';
    }, 900);
}

function closeModal() {
    overlay.style.display = 'none';
    carousel.style.display = 'none';
}

