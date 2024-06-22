
let devam = true;

while (devam){

let kg = Number(prompt("Kilonuzu Girin :"));
let m = Number(prompt("Boyunuzu Metre Cinsinden Girin (örn: 1.8) :"));

let endeks = kg/(m**2);


if (endeks <= 18.5) {
    alert(endeks + "Kg/m²\n\n" + "İdeal kilonun altındasınız");
}

else if (18.5 < endeks && endeks <= 24.9) {
    alert(endeks + "Kg/m²\n\n" + "İdeal kilodasınız");
}

else if (25 < endeks && endeks <= 29.9) {
    alert(endeks + "Kg/m²\n\n" + "İdeal kilonun üstündesin");
}
else if (30 < endeks && endeks <= 39.9) {
    alert(endeks + "Kg/m²\n\n" + "İdeal kilonun çok üstündesiniz(obez)");
}
else if (40 < endeks) {
    alert(endeks + "Kg/m²\n\n" + "İdeal kilonun aşırı üstündensin (morbid obez)");
}
 
else {
    alert("Lütfen verileri Düzgün girin");
    continue;
}

let devamSecimi = prompt("Başka bir hesaplama yapmak istiyor musunuz? (Devam etmek için 'E' devam etmeyecekseniz 'Herhangi bir şey' girin)");
    if (devamSecimi.toLowerCase() !== 'e') {
        devam = false;
}
}

