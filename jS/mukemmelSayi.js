let number = Number(prompt("Lütfen bir sayı giriniz : "));

isPerfectNumber(number);

function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1 ; i <= number/2 ; i++){
        if (number%i==0){
            sum+= i;            
        }
        
    }
    if (sum==number){
        alert(number + " Bir mükemmel sayidir.");
    }
    else {
        alert(number + " Bir mükemmel sayı değildir.")
    }
}