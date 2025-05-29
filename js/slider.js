$(".receipts-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});
document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    const slides = wrapper.querySelector('.slides');
    const slide = wrapper.querySelectorAll('.slide');
    const indicatorsContainer = wrapper.querySelector('.indicators');
    const nextBtn = wrapper.querySelector('.next');
    const prevBtn = wrapper.querySelector('.prev');
    let index = 0;

  
    const slideCount = slide.length;
    slides.style.width = `${slideCount * 100}%`;
    slide.forEach(sl => {
        sl.style.width = `${100 / slideCount}%`;
    });

 
    slide.forEach((_, i) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            index = i;
            updateSlide();
        });
        indicatorsContainer.appendChild(indicator);
    });

   
    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slide.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slide.length) % slide.length;
        updateSlide();
    });

   
    function updateSlide() {
        slides.style.transform = `translateX(${-index * (100 / slideCount)}%)`;
        wrapper.querySelectorAll('.indicator').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

  
    let startX = 0;
    let endX = 0;

    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', () => {
        const diffX = endX - startX;

        if (Math.abs(diffX) > 50) {
            if (diffX < 0) {
                index = (index + 1) % slide.length;
            } else {
                index = (index - 1 + slide.length) % slide.length;
            }
            updateSlide();
        }

        startX = 0;
        endX = 0;
    });
});