//Seçilen elemanın contianer classına sahip olması gerekir.
const container = document.querySelector('.container');
//Id aracılığıyla count span bilgisini alalım.
const count = document.getElementById('count');
//Id aracılığıyla amount span bilgisini alalım.
const amount = document.getElementById('amount');
//Id aracılığıyla film fiyat bilgisini alalım.
const select = document.getElementById('movie');
//Reserved olmayan koltukları seçelim.
const seats = document.querySelectorAll('.seat:not(.reserved)');
//Uygulama yüklendiği anda bilgileri çağıralım.
getFromLocalStorage();
//Uygulama yüklendiği anda hesaplamaları da yapalım.
calculateTotal();

//İlgili elemana click eventi eklendi.
//Click eventi için fonksiyon ekledik.
//Hangi elemana tıklandıysa onun bilgileri gelecek.

container.addEventListener('click', function (e) {

    /*!! FAKAT dikkat edilmesi gereken husus;
    DOLU olan koltukların seçilmemesiyle VE bilgilerinin de gelmemesi gerekir*/
    //Bunun için 'if' fonksiyonu ile koltuklardan, reserved olanların bilgilerini getirme, diğerlerini getir diyoruz

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        //Seçilen eleman içerisinde 'selected' classı varsa siler, yoksa ekler
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

//Filmler değiştirilince seçilen koltuklar aynı kalır fakat filme göre ücret değişir.
select.addEventListener('change', function (e) {
    calculateTotal();
});

function calculateTotal() {
    //Birden fazla eleman seçilecek ve bu elemanlar seat ve selected classlarına sahip olacak.
    const selectedSeats = container.querySelectorAll('.seat.selected');

    //Seçilen koltukların listesini oluşturalım.
    const selectedSeatArr = [];

    //Koltukların listesini oluşturalım.
    const seatsArr = [];

    //Her bir elemanı dolaşıyoruz.(foreach) Push metodu ile her bir elemanı selectedSeatArr listesine ekliyoruz. =>kolay yolu spread!!
    selectedSeats.forEach(function (seat) {
        selectedSeatArr.push(seat);
    });

    //Her bir elemanı seatArr listesine tek tek ekliyoruz.
    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    //Bütün elemanları map metodu ile dolaşıyoruz. Seçilen elemanların KAÇINCI İNDEXte olduklarını buluyoruz ve seatsArr listesine ekleriz.
    let selectedSeatIndexs = selectedSeatArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    //Bulduğumuz indexleri yazdırıyoruz.
    //console.log(selectedSeatIndexs);


    //Bunları saydıralım.
    let selectedSeatCount = selectedSeats.length;
    //Seçilen koltukların sayısını ekranda yazdıralım.
    count.innerText = selectedSeatCount;
    //Seçilen filmin fiyatını alalım.
    let price = select.value;
    //Seçilen filmden, seçilen koltuklarının sayısını çarparak ödenecek tutarı bulalım.
    amount.innerText = selectedSeatCount * price;


    //Oluşturduğumuz elemanları localStorage de saklayalım. selectedSeatIndexs numaralarını kaydedelim.
    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
    //Uygulama türünde kullanacağımız türe çevirelim.
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    //Null a eşit değilse seçilenleri görelim.
    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }


    const selectMovieIndex = localStorage.getItem('selectedMovieIndex')
    //Seçilen filmler null a eşit değilse seçme işlemini yaparız.
    if (selectMovieIndex != null) {
        select.selectedIndex = selectMovieIndex;
    }
}

//index numaralarını, JSON türünde localStorage kaydedelim.
function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    //Aynı şekilde filmlerin de hangisinin seçildiğini de kaydedelim.
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

// Uygulama frontend tarafından bitirildi. Gerçekleşmesi için bir backend'e ihtiyacımız var olduğunu unutmamak gerekiyor.
