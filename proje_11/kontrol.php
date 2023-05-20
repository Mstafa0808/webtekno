<?php
$username = $_POST['username'];
$password = $_POST['password'];

if ($username === 'G211210042@sakarya.edu.tr' && $password === 'G211210042') {
    $welcomeMessage = "Hoşgeldin " . $username;
    header('Location: index.html?message=' . urlencode($welcomeMessage));
    exit;
} else {
    $errorMessage = "Tekrar deneyin";
    header('Location: Login.html?error=' . urlencode($errorMessage));
    exit;
}
?>