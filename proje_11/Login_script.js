function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() == "") {
        alert("Kullanıcı adı boş bırakılamaz");
        return false;
    }

    if (password.trim() == "") {
        alert("Şifre boş bırakılamaz");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(username)) {
        alert("Geçerli bir email adresi girin");
        return false;
    }

    // Formu gönder
    document.forms[0].submit();
}