import Site from './modules/main.js';
import initPage from './modules/page.js';
import initEscrever from './modules/escrever.js';

const titlePag = document.querySelector('.c-header__title');

Site();
initPage();
initEscrever(titlePag);
