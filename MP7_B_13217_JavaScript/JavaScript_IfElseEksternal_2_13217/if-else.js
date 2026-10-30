var iTotal;
var sKupon;

iTotal = prompt("Masukkan total belanjaan Anda (dalam ribu Rupiah)." , 0);
sKupon = prompt("Punya kupon? (Y)a atau (T)idak","Y");

if(iTotal >= 200) {
    if(sKupon == "Y") {
        alert("Diskon 20% dan Gratis ongkir");
    } else { 
         alert("Diskon 10% dan Gratis ongkir");
    }
} else {
    if(sKupon == "Y") {
        alert("Diskon 10%");
    } else { 
         alert("Tidak ada diskon");
    }
}