let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){

    if(qrText.value.length >0){
        qrImg.src = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img"); 
    }
    else{
        alert("Enter the text")
    }

}




