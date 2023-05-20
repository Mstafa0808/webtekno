function validateForm() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
        alert("Lütfen geçerli bir email adresi girin.");
        emailInput.focus();
        return false;
    }

    var telefonInput = document.getElementById("telefon");
    var telefon = telefonInput.value;
    var telefonRegex = /^\d{10}$/;

    if (!telefonRegex.test(telefon)) {
        alert("Lütfen geçerli bir telefon numarası girin. (10 haneli, sadece rakamlardan oluşmalı)");
        telefonInput.focus();
        return false;
    }

    var adInput = document.getElementById("ad");
    var ad = adInput.value;
    if (ad.trim() === "") {
        alert("Lütfen adınızı girin.");
        adInput.focus();
        return false;
    }

    var soyadInput = document.getElementById("soyad");
    var soyad = soyadInput.value;

    if (soyad.trim() === "") {
        alert("Lütfen soyadınızı girin.");
        soyadInput.focus();
        return false;
    }

    var adresInput = document.getElementById("adres");
    var adres = adresInput.value;

    if (adres.trim() === "") {
        alert("Lütfen adresinizi girin.");
        adresInput.focus();
        return false;
    }

    var sehirInput = document.getElementById("sehir");
    var sehir = sehirInput.value;

    if (sehir === "") {
        alert("Lütfen bir şehir seçin.");
        sehirInput.focus();
        return false;
    }

    var robotInput = document.getElementById("robot");
    if (!robotInput.checked) {
        alert("Lütfen robot olmadığınızı onaylayın.");
        return false;
    }

    var cinsiyetInputs = document.getElementsByName("cinsiyet");
    var selectedCinsiyet = false;
    for (var i = 0; i < cinsiyetInputs.length; i++) {
        if (cinsiyetInputs[i].checked) {
            selectedCinsiyet = true;
            break;
        }
    }

    if (!selectedCinsiyet) {
        alert("Lütfen cinsiyetinizi seçin.");
        return false;
    }

    // Diğer alanların doğrulamasını buraya ekleyebilirsiniz

    return true;
}

    var currentPageElement = document.getElementById("currentPage");
    var links = document.getElementsByClassName("nav-link");

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
        var currentPage = this.innerText;
        currentPageElement.innerText = currentPage;
      });

      // Aktif sayfayı belirlemek için kontrol yapısı eklendi
      if (window.location.href.includes(links[i].getAttribute("href"))) {
        links[i].classList.add("active");
        currentPageElement.innerText = links[i].innerText;
      }
    }