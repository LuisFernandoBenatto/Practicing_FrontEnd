function captarVoz(){
    const recognition = new webkitSpeechRecognition();//Só funciona no Google Chrome
    recognition.interimResults = true;
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.start();
    recognition.onresult = function (event){
        for(let i = event.resultIndex; i < event.results.length; i++){
            if(event.results[i].isFinal){
                document.getElementById("texto").innerText = `A pessoa diz: ${event.results[i][0].transcript.trim()}`
            }
        }
    }
}