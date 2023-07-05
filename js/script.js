
// const menuBurg = selector => {
//     const menuContainer = document.querySelectorAll(selector);

//     const menuHandler = menuBrg => {
//         const menuBtn = menuBrg.querySelector('.menu__ico');
//         if (!menuBtn) return;
//         const menu = menuBrg.querySelector('.nav');
//         if (!menu) return;
//     }
   
//     menuContainer.forEach
//     menuBtn.addEventListener('click', () => {
//         menuBtn.classList.toggle('active');
//         menu.classList.toggle('active');
//     });

//     menuContainer.forEach(menuCont => menuHandler(menuCont));
    
// }

// menuBurg('.header')


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
            const buf = event.target.classList.contains('testimonial__arrowR');

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
                    x -= 6;
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

slider('.testimonial__slider');



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


const btn = document.querySelector('.button master__button');
const content = document.querySelector('.master__photos-2');

btn.addEventListener('click', btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains('hidden')) {
        btn.textContent = 'See all works';
    } else {
        btn.textContent = 'Close';
    }

    content.classList.toggle('hidden');
}