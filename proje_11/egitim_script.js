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