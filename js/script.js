
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


// document.getElementById('promo__button').onclick = () => {
//     document.getElementById('enty').scrollIntoView({behavior: 'smooth'});
// }

// let links = document.querySelectorAll('.link');
// for (let i = 0; i < links.length; i++) {
//     links[i].onclick = () => {
//         document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
//     } 
// }

// document.getElementById('team').onclick = () => {
//     document.location.href = 'team.html';
// }

// document.getElementById('teamBut').onclick = () => {
//     document.location.href = 'team.html';
// }

// document.getElementById('contacts').onclick = () => {
//     document.location.href = 'contacts.html';
// }

// let linkPage = document.getElementById('team');
// for (let i = 0; i < links.length; i++) {
//     links[i].onclick = () => {
//         document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
//     }
// }

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


let phone = document.getElementById('enty__phone');
let email = document.getElementById('enty__email');

document.getElementById('enty__but').onclick = () => {
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
}


// let butClick = document.getElementById('master__button');
// butClick.addEventListener('click', toggleBlock);
// let blockShow = document.querySelector('.master__photos-2');

// function toggleBlock() {
//     let blockShow = document.querySelectorAll('.master__photos-2');
//     blockShow.classList.toggle('master__hidden');
// }

// if (blockShow.classList.contains('master__hidden')) {
//     butClick.value = 'See all works';
// } else {
//     butClick.value = 'Close';
// }

// document.addEventListener('DOMContentLoaded', hiddenCloseclick());
//   document.getElementById('master__button').addEventListener('click', hiddenCloseclick);
// 	function hiddenCloseclick() {
// 	let x = document.querySelector('master__photos-2');
//       if (x.style.display == 'none'){
// 	  x.style.display = 'block';
// 	  } else {
// 	    x.style.display = 'none'}
//     };

