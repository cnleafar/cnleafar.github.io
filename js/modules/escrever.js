export default function initEscrever(text,local) {

    const textSplit = text.split('');
    // console.log(textSplit);

    // console.log(textSplit);
    
    local.innerText = ' ';

    textSplit.forEach((letter,i) => {
//         console.log(letter);
        setTimeout(function() {

        local.textContent += letter;

       },40 * i);
    });

    // clearInterval(teste);

}
