import Escrever from "./escrever.js";
function initPage() {

    const home = document.querySelector('.js-home');

    const contact = document.querySelector('.js-contact');

    const menu = document.querySelector('.c-main-menu__list');

    menu.addEventListener('click',(item) => {

        const page = item.target.dataset.target;

        // menu.nextElementSibling.forEach((page)=> console.log(page) );

        if(page) {

            const pages = document.querySelectorAll('[data-page]');

            const pageActive = document.querySelector(`[data-page=${page}]`); 


            if(pageActive.classList.contains('active') === false) {

                pages.forEach((page)=> {
                    if(page.classList.contains('active')) {

                        const targetPage = document.querySelector(`[data-target=${page.dataset.page}]`);
                        targetPage.classList.remove('active');
                        
                    }
                    page.classList.remove('active');
                });

                if(!pageActive.classList.contains('active')) {

                    const titlePag = document.querySelector('.c-header__title');

                    item.target.classList.add('active');

                    pageActive.classList.add('active');
                    
                    titlePag.innerText = pageActive.getAttribute('data-title');
                    
                        Escrever(titlePag);

                    
                    // titlePag.innerText = pageActive.getAttribute('data-title');

                }

            }


        }

    });

}

export default initPage;
