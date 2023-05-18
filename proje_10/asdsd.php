<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kullanıcıdan gelen verileri al
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adı ve şifreyi kontrol et
    if ($username === "G211210042@sakarya.edu.tr" && $password === "G211210042") {
        // Login işlemi başarılı ise yönlendir
        header("Location: file:///C:/Users/musta/OneDrive/Masa%C3%BCst%C3%BC/Proje_6/Untitled-2.html");
        exit;
    }
}
?>
