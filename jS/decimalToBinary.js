let number = Number(prompt("Lütfen dönüüştürükecek sayıyı girin : "));

decimalToBinaryConverter(number);

function decimalToBinaryConverter(number){
    let binary = "";

    while (true)
        {
            if (number==1){
                binary += 1;
                break;
            }
            if (number==0){
                binary += 0;
                break;
            }
            
        binary += String(number%2);
        number = Math.floor(number/2);
        if (number==1){
            binary += 1;
            break;
        }
    }
    let result = reverse(binary);
    document.write("Sonuç : " + result);
}

function reverse(binary) {
    let reversebinary = "";
    for (let i = binary.length-1 ; i >= 0 ; i--){
        reversebinary += binary.charAt(i);
    }
    return reversebinary;
}

