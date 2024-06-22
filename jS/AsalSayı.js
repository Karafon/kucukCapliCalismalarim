let Asalsyi = Number(prompt("Sayı Girin:"));
let sonuc = true;

if (Asalsyi <= 1) {
    sonuc = false;
} else {
    for (let i = 2; i <= Math.floor(Asalsyi / 2); i++) {
        if (Asalsyi % i == 0) {
            sonuc = false;
            break;
        }
    }
}

if (sonuc && Asalsyi > 1) {
    alert(Asalsyi + " bir asal sayıdır.");
} else {
    alert(Asalsyi + " asal sayı değildir.");
}