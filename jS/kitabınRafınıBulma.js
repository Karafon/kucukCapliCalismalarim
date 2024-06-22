let kitap1 = { isim: "A", raf: "Raf 1-2" };
let kitap2 = { isim: "B", raf: "Raf 5-3" };
let kitap3 = { isim: "C", raf: "Raf 2-1" };
let kitap4 = { isim: "D", raf: "Raf 3-5" };
let kitap5 = { isim: "E", raf: "Raf 4-4" };

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5];

let raf11 = { kod: "Raf 1-1", goster: false };
let raf12 = { kod: "Raf 1-2", goster: false };
let raf13 = { kod: "Raf 1-3", goster: false };
let raf14 = { kod: "Raf 1-4", goster: false };
let raf15 = { kod: "Raf 1-5", goster: false };

let raf21 = { kod: "Raf 2-1", goster: false };
let raf22 = { kod: "Raf 2-2", goster: false };
let raf23 = { kod: "Raf 2-3", goster: false };
let raf24 = { kod: "Raf 2-4", goster: false };
let raf25 = { kod: "Raf 2-5", goster: false };

let raf31 = { kod: "Raf 3-1", goster: false };
let raf32 = { kod: "Raf 3-2", goster: false };
let raf33 = { kod: "Raf 3-3", goster: false };
let raf34 = { kod: "Raf 3-4", goster: false };
let raf35 = { kod: "Raf 3-5", goster: false };

let raf41 = { kod: "Raf 4-1", goster: false };
let raf42 = { kod: "Raf 4-2", goster: false };
let raf43 = { kod: "Raf 4-3", goster: false };
let raf44 = { kod: "Raf 4-4", goster: false };
let raf45 = { kod: "Raf 4-5", goster: false };

let raf51 = { kod: "Raf 5-1", goster: false };
let raf52 = { kod: "Raf 5-2", goster: false };
let raf53 = { kod: "Raf 5-3", goster: false };
let raf54 = { kod: "Raf 5-4", goster: false };
let raf55 = { kod: "Raf 5-5", goster: false };


let raf = [

    [raf11, raf12, raf13, raf14, raf15],
    [raf21, raf22, raf23, raf24, raf25],
    [raf31, raf32, raf33, raf34, raf35],
    [raf41, raf42, raf43, raf44, raf45],
    [raf51, raf52, raf53, raf54, raf55],

];

function rafOlustur() {
  console.clear();
  let satir = "";
  for (let i = 0; i < raf.length; i++) {
    for (let j = 0 ; j < 5 ; j++){
    satir += "|" + (raf[i][j].goster ? raf[i][j].kod : "---") + "|";
}
console.log(satir);
console.log("*********************")
satir="";     
}

}

function raftaGöster(rafKodu) {
  for (let i = 0; i < raf.length; i++) {
    for (let j = 0 ; j < 5 ; j++){
    if (raf[i][j].kod === rafKodu) {
      raf[i][j].goster = true;
      break;
    }
}
  }
}

rafOlustur();

function kitapKodu(kitapIsmi) {
  let rafKod = null;
  kitaplar.forEach(function (kitap) {
    if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase())) {
      rafKod = kitap.raf;
    }
  });
  return rafKod;
}

let arananKitapIsmi = prompt("Lütfen aradığınız kitabın ismini girin:");
if (arananKitapIsmi) {
  let rafKodu = kitapKodu(arananKitapIsmi);

  if (rafKodu !== null) {
    raftaGöster(rafKodu);
    rafOlustur();
  } else {
    alert("Aradığınız kitap bulunamadı.");
  }
} else {
  alert("Geçersiz giriş. Lütfen bir kitap ismi girin.");
}
