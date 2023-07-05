
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

        console.log(elem);
        console.log(type);

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

