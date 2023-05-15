<!DOCTYPE html>
<html>
<head>
  <title>Gönderilen Bilgiler</title>
</head>
<body>
  <h2>Gönderilen Bilgiler</h2>
  <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $email = $_POST["email"];
      $ad = $_POST["ad"];
      $soyad = $_POST["soyad"];
      $adres = $_POST["adres"];
      $sehir = $_POST["sehir"];
      $robot = isset($_POST["robot"]) ? "Evet" : "Hayır";
      $cinsiyet = $_POST["cinsiyet"];

      echo "<p>Email: $email</p>";
      echo "<p>Ad: $ad</p>";
      echo "<p>Soyad: $soyad</p>";
      echo "<p>Adres: $adres</p>";
      echo "<p>Şehir: $sehir</p>";
      echo "<p>Robot Değilim: $robot</p>";
      echo "<p>Cinsiyet: $cinsiyet</p>";
    }
  ?>
</body>
</html>
