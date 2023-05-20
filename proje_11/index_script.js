    // JavaScript kodları
    var loginLink = document.getElementById('login-link');

    // Giriş yapıldığında bu fonksiyon çalışacak
    function guncelleGirisYazisi() {
      loginLink.textContent = "Giriş Yapıldı";
    }

    // Giriş formundan geri dönüş olduğunda kontrol edilecek
    function kontrolEtGirisYapildiMi() {
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      var girisYapildi = urlParams.get('girisYapildi');

      if (girisYapildi === "true") {
        guncelleGirisYazisi();
      }
    }

    // Sayfa yüklendiğinde kontrol işlemi yapılacak
    window.onload = function() {
      kontrolEtGirisYapildiMi();
    };
	
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
	
	    // URL'den mesaj parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');

    // Mesajı alert olarak göster
    if (message) {
        alert(message);
    }