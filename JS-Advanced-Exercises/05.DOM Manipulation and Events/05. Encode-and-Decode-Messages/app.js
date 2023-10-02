function encodeAndDecodeMessages() {
    let textBoxElements = document.querySelectorAll('textarea');
    
    let messageElement = textBoxElements[0];
    let receivedMessageElement = textBoxElements[1];

    let btnElements = document.querySelectorAll('button');

    let encodeBtnElement = btnElements[0];
    let decodeBtnElement = btnElements[1];

    encodeBtnElement.addEventListener('click', encode);
    decodeBtnElement.addEventListener('click', decode);

    function encode(){

        let result = '';
        let text = messageElement.value

        for (let i = 0; i < text.length; i++){
            let charCode = text[i].charCodeAt();
            result += String.fromCharCode(charCode + 1);
        };
        
        receivedMessageElement.value = result;
        messageElement.value = '';
    }

    function decode(){
        let result = '';
        let text = receivedMessageElement.value;

        for (let i = 0; i < text.length; i++){
            let charCode = text[i].charCodeAt();
            result += String.fromCharCode(charCode - 1);
        };
        
        receivedMessageElement.value = result;
    }
    
}