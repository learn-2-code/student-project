var $ = function (selector) {
    return document.querySelector(selector);
}

var ogrenciler = [];

var ogrenciEkle = function (event) {
    if (event.type == "click" || event.key == "Enter") {
        var ogrenci_adi = $("#ogrenci").value;

        if (ogrenci_adi.length === 0) {
            alert("Lütfen öğrenci adı giriniz.");
            return;
        }

        if (ogrenci_adi.length < 3) {
            alert("Öğrenci adı 3 karakterden daha az olamaz.");
            return;
        }

        if (ogrenciler.find(x => x == ogrenci_adi)) {
            alert("Bu öğrenci zaten daha önce eklenmiş.");
            return;
        }

        // <div class="ogrenci">Selçuk Ermaya</div>
        var ogrenci = document.createElement("div");
        ogrenci.className = "ogrenci";
        ogrenci.innerText = ogrenci_adi;
        $(".ogrenci-listesi").append(ogrenci);
        $("#ogrenci").value = "";
        $("#ogrenci").focus();
        ogrenciler.push(ogrenci_adi);
    }
};

$("#ogrenci_ekle").addEventListener("click", ogrenciEkle);
$("#ogrenci").addEventListener("keydown", ogrenciEkle);