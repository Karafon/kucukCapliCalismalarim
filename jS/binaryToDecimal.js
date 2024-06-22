let number = prompt("Lütfen bir sayı girim");

function binaryToDecimal(number) {
    let sum = 0;
    let ust = 0;
    for ( i = number.length-1 ; i>=0 ; i--){
        if (Number(number.charAt)!=0){
        sum += Number(number.charAt(i)) * Math.pow(2,ust)
        ust++;
        }
    }
    document.write(sum);
}

binaryToDecimal(number);