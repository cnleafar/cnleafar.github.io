export default function initEscrever(text) {


    const textSplit = text.innerText.split('');
    // console.log(textSplit);

    // console.log(textSplit);
    
    text.innerText = '';

    textSplit.forEach((letter,i) => {
        console.log(letter);
        setTimeout(function() {

        text.textContent += letter;

       },40 * i);
    });

    // clearInterval(teste);

}
