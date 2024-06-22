let yeniSatir = "\r\n"
let Bakiye = 1000;
let devam = true;
while (devam) {
let metin = "1-Bakiye görüntüleme" + yeniSatir + 
"2-Para çekme" + yeniSatir + 
"3-Para yatırma" + yeniSatir + 
"4-Çıkış";


let secim = Number(prompt(metin));

switch(secim){

    case 1 :
        alert("Bakiyeniz :" + Bakiye);
        break;
    case 2 :
        let cekilecekTutar = Number(prompt("Bakiyeniz :" + Bakiye + yeniSatir + "Çekecekğiniz tutarı girin :"));
        if (cekilecekTutar <= Bakiye) {
                Bakiye -= cekilecekTutar;
            alert("İşleminiz tamamlanmıştır." + yeniSatir + 
                "Mevcut bakiyeniz :" + Bakiye);
        }
        else {
            alert("Yetersiz Bakiye." + yeniSatir +
                "Bakiye :" + Bakiye);
        }
        break;
    case 3 :
        let yatırılacakTutar = Number(prompt("Yatırılacak tutarı girin :"));
        Bakiye+= yatırılacakTutar;
        alert("Güncel bakiyeniz :" + Bakiye);
        break;
    case 4 :
        alert("sistemden çıkış yapılmıştır.");
        devam = false
        break;

        default :
        {
            alert("1, 2, 3 ya da 4 rakamını girin.")
        }
        break;



}
}