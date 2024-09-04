//BÖLÜM - 1
const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
getFromLocalStorage();
calculateTotal();

// BÖLÜM -2 
container.addEventListener('click', function (e) {

    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {

        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', function (e) {
    calculateTotal();
});

// BÖLÜM - 3
function calculateTotal() {

    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatArr = [];

    const seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatArr.push(seat);
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selectedSeatArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    });

    //Bulduğumuz indexleri yazdırıyoruz.
    //console.log(selectedSeatIndexs);

    // BÖLÜM - 4
    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    let price = select.value;
    amount.innerText = selectedSeatCount * price;

    saveToLocalStorage(selectedSeatIndexs);
}

// BÖLÜM - 5 

function getFromLocalStorage() {

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
    const selectMovieIndex = localStorage.getItem('selectedMovieIndex')

    if (selectMovieIndex != null) {
        select.selectedIndex = selectMovieIndex;
    }
}


// BÖLÜM - 6 
function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));

    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

// Uygulama frontend tarafından bitirildi. Gerçekleşmesi için bir backend'e ihtiyacımız var olduğunu unutmamak gerekiyor.


// *********************************************** BÖLÜMLER ************************************************//

// BÖLÜM - 1

//Seçilen elemanın contianer classına sahip olması gerekir.
//Id aracılığıyla count span bilgisini alalım.
//Id aracılığıyla amount span bilgisini alalım.
//Id aracılığıyla film fiyat bilgisini alalım.
//Reserved olmayan koltukları seçelim.
//Uygulama yüklendiği anda bilgileri çağıralım.
//Uygulama yüklendiği anda hesaplamaları da yapalım.

//-------------------------------------------------------------------------------------------------------//

// BÖLÜM - 2

//İlgili elemana click eventi eklendi.
//Click eventi için fonksiyon ekledik.
//Hangi elemana tıklandıysa onun bilgileri gelecek.
/*!! FAKAT dikkat edilmesi gereken husus;
    DOLU olan koltukların seçilmemesiyle VE bilgilerinin de gelmemesi gerekir*/
//Bunun için 'if' fonksiyonu ile koltuklardan, reserved olanların bilgilerini getirme, diğerlerini getir diyoruz
//Seçilen eleman içerisinde 'selected' classı varsa siler, yoksa ekler.

//--------------------------------------------------------------------------------------------------------//

// BÖLÜM - 3

//Filmler değiştirilince seçilen koltuklar aynı kalır fakat filme göre ücret değişir.
//Birden fazla eleman seçilecek ve bu elemanlar seat ve selected classlarına sahip olacak.
//Seçilen koltukların listesini oluşturalım.
//Koltukların listesini oluşturalım.
//Her bir elemanı dolaşıyoruz.(foreach) Push metodu ile her bir elemanı selectedSeatArr listesine ekliyoruz. =>kolay yolu spread!!
//Her bir elemanı seatArr listesine tek tek ekliyoruz.
//Bütün elemanları map metodu ile dolaşıyoruz. Seçilen elemanların KAÇINCI İNDEXte olduklarını buluyoruz ve seatsArr listesine ekleriz.

//----------------------------------------------------------------------------------------------------------//

// BÖLÜM - 4

//Bunları saydıralım.
//Seçilen koltukların sayısını ekranda yazdıralım.
//Seçilen filmin fiyatını alalım.
//Seçilen filmden, seçilen koltuklarının sayısını çarparak ödenecek tutarı bulalım.
//Oluşturduğumuz elemanları localStorage de saklayalım. selectedSeatIndexs numaralarını kaydedelim.

//----------------------------------------------------------------------------------------------------------//

// BÖLÜM - 5

//Uygulama türünde kullanacağımız türe çevirelim.
//Null a eşit değilse seçilenleri görelim.
//Seçilen filmler null a eşit değilse seçme işlemini yaparız.

//----------------------------------------------------------------------------------------------------------//

// BÖLÜM - 6

//index numaralarını, JSON türünde localStorage kaydedelim.
//Aynı şekilde filmlerin de hangisinin seçildiğini de kaydedelim.