export default function initEscrever(text) {

    console.log(text);

    const textSplit = text.innerText.split('');
    // console.log(textSplit);

    // console.log(textSplit);
    
    text.textContent = '';

    textSplit.forEach((letter,i) => {
//         console.log(letter);
        setTimeout(function() {

        text.textContent += letter;

       },40 * i);
    });

    // clearInterval(teste);

}
