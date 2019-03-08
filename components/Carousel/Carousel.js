class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.navButtons = carousel.querySelector('.carousel-nav');
        this.carouselItems = carousel.querySelectorAll('.carousel-item');
        this.carouselItems = Array.from(this.carouselItems).map(function (item) {
            return new CarouselItem(item);
        });
        this.activeItem = 0;

        this.navButtons.addEventListener('click', event => this.toggleItem(event));
    }

    toggleItem(event) {

        this.carouselItems[this.activeItem].deselect();

        if (event.target.className.includes('carousel-nav-left')) {
            this.activeItem--;
            if(this.activeItem < 0) this.activeItem = this.carouselItems.length-1;
        } else {
            this.activeItem++;
            if(this.activeItem > this.carouselItems.length-1) this.activeItem = 0;
        }

        this.carouselItems[this.activeItem].select();
    }
}

class CarouselItem {
    constructor(carouselItem) {
        this.item = carouselItem;
    }

    select(){
        this.item.classList.add('carousel-active-item');
    }

    deselect(){
        this.item.classList.remove('carousel-active-item');
    }
}


document.querySelectorAll('.carousel').forEach(carousel => {
    new Carousel(carousel)
})