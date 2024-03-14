let currentIndex = 0;
const totalSlides = 6;
const slider = document.querySelector('.slider');
let slideWidth = 30;
const intervalTime = 4000;
const slideCounter = document.querySelector('.counter');

function moveSlider(direction) {
    if (window.innerWidth <= 568) {
        slideWidth = 100;
    } else if (window.innerWidth <= 992) {
        slideWidth = 50;
    } else {
        slideWidth = 30;
    }

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    const offset = -currentIndex * slideWidth;
    slider.style.transition = 'transform 0.5s';
    slider.style.transform = `translateX(${offset}vw)`;

    slideCounter.textContent = `${currentIndex + 1} / ${totalSlides}`;
}
moveSlider('next');

function autoScroll() {
    setInterval(() => {
        moveSlider('next');
    }, intervalTime);
}

autoScroll();

// STAGES SLIDER


let currentIndexSt = 0;
const totalSlidesSt = 5;
const sliderSt = document.querySelector('.stages__list--mob');
const paginationSt = document.querySelector('.pagination');
const slideWidthSt = 100;

function moveSliderSt(direction) {
    if (direction === 'nextSt' && currentIndexSt < totalSlidesSt - 1) {
        currentIndexSt++;
    } else if (direction === 'prevSt' && currentIndexSt > 0) {
        currentIndexSt--;
    }

    const offset = -currentIndexSt * slideWidthSt;
    sliderSt.style.transition = 'transform 0.5s';
    sliderSt.style.transform = `translateX(${offset}vw)`;

    const paginationItems = paginationSt.querySelectorAll('.pagination__item');
    paginationItems.forEach((item, index) => {
        if (index === currentIndexSt) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });


    const btnPrev = document.querySelector('.stages__prev');
    const btnNext = document.querySelector('.stages__next');

    if (currentIndexSt === 0) {
        btnPrev.style.backgroundColor = 'var(--disable-color)';
    } else {
        btnPrev.style.backgroundColor = '';
    }

    if (currentIndexSt === totalSlidesSt - 1) {
        btnNext.style.backgroundColor = 'var(--disable-color)';
    } else {
        btnNext.style.backgroundColor = '';
    }
}

const paginationItems = [];
for (let i = 0; i < totalSlidesSt; i++) {
    const item = document.createElement('div');
    item.classList.add('pagination__item');
    item.addEventListener('click', () => {
        currentIndexSt = i;
        moveSliderSt();
    });
    paginationSt.appendChild(item);
    paginationItems.push(item);
}

moveSliderSt();








