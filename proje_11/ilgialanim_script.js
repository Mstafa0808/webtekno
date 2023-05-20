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


    var xhr = new XMLHttpRequest();
    var url = 'https://api.thecatapi.com/v1/images/search?limit=8';

    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var catPhotosDiv = document.getElementById('catPhotos');

        response.slice(0, 8).forEach(function(cat) {
          var col = document.createElement('div');
          col.classList.add('col-sm-12', 'col-md-6', 'col-lg-3', 'mb-4');

          var image = new Image();
          image.src = cat.url;
          image.classList.add('cat-photo');
          col.appendChild(image);

          catPhotosDiv.appendChild(col);
        });
      }
    };

    xhr.send();