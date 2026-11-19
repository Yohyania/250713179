var rupiah = prompt("Masukkan nominal uang dalam Rupiah (ID) :");
var usd = parseFloat(rupiah) / 18266;
alert("Hasil konversi ke USD : US$" + usd.toFixed(2));