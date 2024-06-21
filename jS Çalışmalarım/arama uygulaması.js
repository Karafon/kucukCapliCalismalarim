


let kitap1 = {
    isim: "Kahramalar",
    kategori: "c",
    fiyat: "10"
    
} 
let kitap2 = {
    isim: "Yere Bakan Yürek Yakan",
    kategori: "c",
    fiyat: "20"

} 
let kitap3 = {
    isim: "Yürekli aslanlar",
    kategori: "c",
    fiyat: "30"

} 

let kitaplar = [kitap1, kitap2, kitap3];
let kitapismi = prompt("kitap ismi girin :");
let depo = [];

function kitaplarıDiz(kitaplar){
    kitaplar.forEach(function(kitap){
        if (kitap.isim.toUpperCase().includes(kitapismi.toUpperCase(),0)) {
            depo.push(kitap);

        }
    })
}


function kitaplarıGöster(kitaplar) {
    kitaplar.forEach(function(kitap){
        document.writeln("<br>|" + kitap.isim + "|<br><br>");
    })

}

kitaplarıDiz(kitaplar);
kitaplarıGöster(depo);