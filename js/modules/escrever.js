export default function initEscrever(text) {

    const textSplit = text.innerText.split('');
    
    text.textContent = '';

    textSplit.forEach((letter,i) => {
        setTimeout(function() {

        text.textContent += letter;

       },40 * i);
    });
}
