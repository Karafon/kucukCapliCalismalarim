// 153 - 370 - 407 

let sayi = prompt("Lütfen bir sayı giriniz :");

let sonuc = 0;

for ( i = 0 ; i<sayi.length ; i++){
    let rakam = sayi.charAt(i);
    sonuc+=rakam**3;
}
if (Number(sonuc)==sayi){
    alert(sayi + " Bir armstrong sayısıdır.");
}
else {
    alert(sayi + " Bir armstrong sayısı değildir.");
}