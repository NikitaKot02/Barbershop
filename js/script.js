const burger = selector => {
    const burgerContainer = document.querySelectorAll(selector);
    if (!burgerContainer) return;

    const menu = document.querySelector('.nav'),
        menuItem = document.querySelectorAll('.nav_item'),
        burgerMenu = document.querySelector('.burger__menu');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger__active');
        menu.classList.toggle('nav__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger__active');
            menu.classList.toggle('nav__active');
        });
    });
}
burger('.header');


const slider = selector => {
    const slidersContainer = document.querySelectorAll(selector);

    const sliderHandler = slideContainer => {
        const sliders = slideContainer.querySelector('.testimonial__items');
        if (!sliders) return;

        const slides = slideContainer.querySelectorAll('.testimonial__item');
        if (!slides || !slides.length > 1) return;

        const buttons = slideContainer.querySelectorAll('.testimonial__arrow');
        if (!buttons) return;

        const switchSlide = event => {
            const buf = event.target.classList.contains('.testimonial__arrowR');

            let x = sliders.style.transform || '0';
            x = x.replace('translate(', "");
            x = Math.abs(parseInt(x));

            if (buf){
                if (x < (slides.length * 6) - 6){
                    x += 6;
                } else{
                    x = 0;
                }
            } else{
                if (x > 0){
                    x -= 24;
                } else{
                    x = (slides.length * 6) - 6;
                }
            }

            sliders.style.transform = `translate(-${x}%)`;
        }

        buttons.forEach(button => {
            button.addEventListener('click', switchSlide);
        });
    }

    slidersContainer.forEach(slide => sliderHandler(slide));
}
slider('.testimonial');


const popup = selector => {
    const elems = document.querySelectorAll(selector);
    if (!elems) return;

    const show = content => {
        let popUpContainer = document.createElement('div');
        let popUpModal = document.createElement('div');
        let popUpClose = document.createElement('div');
        let popUpContent = document.createElement('div');

        popUpContainer.classList.add('popup');
        popUpModal.classList.add('popup__modal');
        popUpClose.classList.add('popup__close');
        popUpContent.classList.add('popup__content');

        popUpClose.innerHTML = '&#215;';
        popUpContent.append(content);

        popUpClose.addEventListener('click', () => popUpContainer.remove());

        popUpModal.append(popUpClose, popUpContent);
        popUpContainer.append(popUpModal);

        document.body.append(popUpContainer);
    }
    
    const popUpHandler = event => {
        event.preventDefault();

        let elem = event.target;
        let type = elem.dataset.type;

        if (!type){
            let parent = elem.closest('[data-type]');

            if (!parent) return;
            type = parent.dataset.type;
            if (!type) return;
            elem = parent;
        }

        let content = '';

        if (type === 'img'){
            const href = elem.href;
            if (!href) return;

            let img = document.createElement('img');
            img.setAttribute('src', href);
            content = img;
        }

        show(content);
    }

    elems.forEach(elem => {
        elem.addEventListener('click', popUpHandler);
    });
}
popup('a');


const orderForm = selector => {
    const formContainer = document.querySelectorAll(selector);
    if (!formContainer) return;

    const phone = document.getElementById('enty__phone'), 
        email = document.getElementById('enty__email');

    document.getElementById('enty__but').addEventListener('click', () => {
        let hasError = false;

        [phone, email].forEach(item => {
            if (!item.value) {
                item.style.background = 'red';
                hasError = true;
            }else{
                item.style.background = '';
            }
        });

        if (!hasError){
            [phone, email].forEach(item => {
                item.value = '';
            });
            alert('Thank you!')
        }
    });
}
orderForm('.enty');


const formMemory = selector => {
    const inputsMemory = document.querySelectorAll(selector);
    if (!inputsMemory) return;

    const inputs = document.querySelectorAll('input');
    for(const input of inputs){
        input.value = localStorage[`input_${input.name}`] || '';
        input.addEventListener('change', function(){
            localStorage[`input_${this.name}`] = this.value;
        });
    }
}
formMemory('.enty');


const gallery = selector => {
    const galleryhid = document.querySelectorAll(selector);
    if (!galleryhid) return;

    const butHid = document.querySelector('.master__button'), 
    newPhotos = document.querySelector('.master__photos-2');

    butHid.addEventListener('click', butClick);

    function butClick() {
        if (newPhotos.classList.contains('master__hidden')){
            butHid.textContent = 'Close';
        }else {
            butHid.textContent = 'See all works';
        }

        newPhotos.classList.toggle('master__hidden');
    }
}
gallery('.masters');