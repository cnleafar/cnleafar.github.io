const home = document.querySelector('.js-home');

const contact = document.querySelector('.js-contact');



const menu = document.querySelector('.c-main-menu__list');

menu.addEventListener('click',(item) => {

    const page = item.target.dataset.target;
    // const findActive = item.target.classList.contains('active');

    if(page) {

        console.log('aaaa');

        const pages = document.querySelectorAll('[data-page]');

        const pageActive = document.querySelector(`[data-page=${page}]`); 


        if(pageActive.classList.contains('active') === false) {

            pages.forEach((page)=> page.classList.remove('active') );

            if(!pageActive.classList.contains('active')) {

                pageActive.classList.add('active');

            }

        }


    }

    // console.log(item)

});