function fn_ValForm() {
    var sMsg = "";
    var nama = document.getElementById("nama").value;
    var email = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var umur = document.getElementById("umur").value ;
    var kategori = document.getElementById("kategori").value;
    var info;
    var info2;

    if (document.getElementById("nama").value == "") {
        sMsg += "\n* Anda belum mengisikan nama.\n";
    }         
    if (document.getElementById("email").value == "") {
        sMsg += "\n* Anda belum mengisikan email.\n";
    } else if (!email.test(document.getElementById("email").value)) {
        alert("Email Tidak Sesuai");
    }
    if (document.getElementById("umur").value == "") {
        sMsg += "\n* Anda belum mengisikan umur.\n";
    }
    if (document.getElementById("kategori").value == "") {
        sMsg += "\n* Anda belum mengisikan paket member.\n";
    }
    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }
    if (umur <= 25) {
         info = "Paket Pelajar";
     } else {
         info = "Paket Umum";
     }
    switch(kategori) {
            case "S":
                info2 = "Silver";
                break;
            case "G":
                info2 = "Gold";
                break;
            case "P":
                info2 = "Platinum";
                break;
            default:
                info2 = "Tidak Dikenali";
    }     

    alert("Terima Kasih " + nama + "! Anda Terdaftar di kategori " + info2 + " dengan paket " + info + ".");
    return true;
}