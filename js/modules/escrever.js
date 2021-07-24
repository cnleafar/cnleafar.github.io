
let intervalWriter;

export default function initEscrever(text) {
    const textSplit = text.innerText.split('');
    text.textContent = null;
    let i = 0;
    clearInterval(intervalWriter);
    
    function typeWriter() {
        
        if (i <= (textSplit.length - 1)) {
            text.textContent += textSplit[i];
        } else {
            clearInterval(intervalWriter);
        }
        
        ++i;
    }
    intervalWriter = setInterval(typeWriter, 1000 / textSplit.length);
}
