  // Sayfanın en üstüne gitmek için fonksiyon
  function scrollToTop() {
    if (document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50); // Scroll hızı ve mesafesi ayarlanabilir
      setTimeout(scrollToTop, 10); // Scroll işlemi devam ediyor
    }
  }

  // Sayfa yüksekliği belirli bir değere ulaştığında düğmeyi göster/gizle
  window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    var scrollHeight = window.innerHeight;
    var currentPosition = window.pageYOffset;

    if (currentPosition > scrollHeight / 2) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // "Yukarı Çık" düğmesine tıklanınca sayfanın en üstüne git
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  scrollToTopBtn.addEventListener('click', scrollToTop);
  
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