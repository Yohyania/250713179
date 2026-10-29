function fn_ValForm(){
    var sMsg = "";
    var iUmur;
    var eMail;
    var sInput;
    
    var Mail = ^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z09][\.][a-z0-9]{2,4}$;

    if(document.getElementById("nama").value == ""){
        sMsg += "\n* Anda belum mengisi nama";
        return false;
    }
    if(document.getElementById("email").value == ""){
        sMsg += "\n* Anda belum mengisi email";
    }
    if(document.getElementById("umur").value == ""){
        sMsg += "\n* Anda belum mengisi umur";
    }
    if(document.getElementById("Pilih Lomba").value == ""){
        sMsg += "\n* Lomba belum dipilih";
    }
    if(iUmur <= 14){
        sMsg += "\n* Kategori Junior";
    }
    if(iUmur > 14){
        sMsg += "\n* Kategori Senior";
    }
    if(sMsg!= ""){
        alert("Peringatan : \n" + sMsg);
        return false;
    }
    else{
        return true;
        }
}