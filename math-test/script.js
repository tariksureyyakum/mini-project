const kutu = document.getElementById("box");
const BaslaButtonu = document.getElementById("basla");
const SonrakiSoruButtonu = document.getElementById("sonraki");
const BitirButtonu = document.getElementById("bitir");
let HangiIslem = document.getElementById("islem");
let sayi1 = document.getElementById("sayi1");
let sayi2 = document.getElementById("sayi2");
const CevaplaButtonu = document.getElementById("gonder");
let GirilenDeger = document.getElementById("cevap");
const mesaj1 = document.getElementById("bilgi1");
const mesaj2 = document.getElementById("bilgi2");
let skor = document.getElementById("skor");
const baslik = document.getElementById("baslik");

var kacinci = 1;
var DogruSayisi = 0;
var sonuc;
kutu.style.display = "none";
SonrakiSoruButtonu.style.display = "none";

BaslaButtonu.addEventListener("click", baslat);
BitirButtonu.addEventListener("click", bitir);
CevaplaButtonu.addEventListener("click", cevapla);
SonrakiSoruButtonu.addEventListener("click", ilerle);

function baslat() {
    GirilenDeger.value == " ";
    baslik.innerText = "SORU - " + kacinci;
    sayi1 = Math.floor(Math.random() * 9) + 1;
    sayi2 = Math.floor(Math.random() * 9) + 1;

    BaslaButtonu.style.display = "none";
    kutu.style.display = "block";

    var IslemCesidi = Math.floor(Math.random() * 3) + 1;
    if (IslemCesidi == 1) {
        toplama();
    } else if (IslemCesidi == 2) {
        cikarma();
    } else if (IslemCesidi == 3) {
        carpma();
    }
}

function bitir() {
    var kontrol = confirm("Emin Misiniz? (Skorunuz Sıfırlanacaktır)");
    if (kontrol == true) {
        kacinci = 1;
        baslik.innerText = "BASİT MATEMATİK TESTİ";
        DogruSayisi = 0;
        skor.innerHTML = "Dogru Sayısı: " + DogruSayisi;
        kutu.style.display = "none";
        BaslaButtonu.style.display = "block";
    }
}

function toplama() {
    HangiIslem.innerText = "+";
    document.getElementById("sayi1").innerText = sayi1;
    document.getElementById("sayi2").innerText = sayi2;
    sonuc = Number(sayi1) + Number(sayi2);
}

function cikarma() {
    HangiIslem.innerText = "-";
    document.getElementById("sayi1").innerText = sayi1;
    document.getElementById("sayi2").innerText = sayi2;
    sonuc = Number(sayi1) - Number(sayi2);
}

function carpma() {
    HangiIslem.innerText = "*";
    document.getElementById("sayi1").innerText = sayi1;
    document.getElementById("sayi2").innerText = sayi2;
    sonuc = Number(sayi1) * Number(sayi2);
}

function cevapla() {
    if (GirilenDeger.value == " ")
        alert("Lütfen Sayı Değeri Giriniz");
    else {
        if (GirilenDeger.value == sonuc) {
            DogruSayisi = DogruSayisi + 1;
            console.log("Dogru");
            kutu.style.display = "none";
            SonrakiSoruButtonu.style.display = "block";
            mesaj1.style.display = "block";
        } else {
            console.log("Yanlis");
            kutu.style.display = "none";
            SonrakiSoruButtonu.style.display = "block";
            mesaj2.style.display = "block";
        }
    }
}

function ilerle() {
    mesaj1.style.display = "none";
    kacinci = kacinci + 1;
    baslik.innerText = "SORU - " + kacinci;
    mesaj2.style.display = "none";
    SonrakiSoruButtonu.style.display = "none";
    kutu.style.display = "block";
    GirilenDeger.value = " ";
    sayi1 = Math.floor(Math.random() * 9) + 1;
    sayi2 = Math.floor(Math.random() * 9) + 1;
    document.getElementById("sayi1").innerText = sayi1;
    document.getElementById("sayi2").innerText = sayi2;
    skor.innerHTML = "Doğru Sayısı: " + DogruSayisi;

    IslemCesidi = Math.floor(Math.random() * 3) + 1;
    if (IslemCesidi == 1) {
        toplama();
    } else if (IslemCesidi == 2) {
        cikarma();
    } else if (IslemCesidi == 3) {
        carpma();
    }
}