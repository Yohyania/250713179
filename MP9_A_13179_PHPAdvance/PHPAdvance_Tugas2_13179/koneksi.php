<?php
$coon = mysqli_connect('localhost', 'root', '', 'mp9_php_advance');
    if(!$coon){
        die('Koneksi gagal : ' . mysqli_connect_error());
    }
?>