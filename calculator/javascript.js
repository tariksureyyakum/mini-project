// HTML sayfasında gerekli elementlere ulaşılarak seçildi.
let secim = document.querySelector("#box").children;
let sonuc = document.querySelector("#sonuc");
let clean = document.querySelector("#clean");
let hesap = document.querySelector("#hesapla");

// "temizle" ve "hesapla" butonu için ayrı dinleyiciler tanımlandı.
clean.addEventListener("click", temizle);
hesap.addEventListener("click", hesapla);

// Diğer tüm tuşlar için dinleyiciler tanımlandı.
for (var i = 0; i < 16; i++) {
    if (i != 12 && i != 14) { // "temizle" ve "hesapla" butonları hariç tutuldu.
        secim[i].addEventListener("click", yazdir);
    }
}

// "eval" ile hesaplama yapıldı.
function hesapla() {
    sonuc.innerText = eval(sonuc.innerText);
    if (eval(sonuc.innerText.length) > 8) { // Çıkan sonuç 8 basamaktan büyükse 8 basamak olarak girdirildi.
        sonuc.innerText = eval(sonuc.innerText).toPrecision(8);
    }
}

// "temizle" butonunun işlevi girildi.
function temizle() {
    sonuc.innerText = " ";
}

// Tıklanan tuşlar sonuç ekranını atandı.
function yazdir() {
    if (sonuc.innerText.length < 8) // 8 basamaktan fazla olması engellendi. 
        sonuc.innerText = sonuc.innerText + this.innerText;
}