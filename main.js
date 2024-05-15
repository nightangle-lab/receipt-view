function generateQRCode(data, width = 70, height = 70) {
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=${width}x${height}`;
  }

function getCurrentDateAsString() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    return dateString;
}

function printContainer(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        var container = elements[0].innerHTML;
        var originalBody = document.body.innerHTML;
        document.body.innerHTML = container;
        window.print();
        document.body.innerHTML = originalBody;
    } else {
        console.error("No element found with class name: " + className);
    }
}
function p(){
    printContainer("container");
}
function s(){
    n = document.getElementById("name").value;
    a = document.getElementById("age").value;
    d = document.getElementById("doctor").value;
    v = document.getElementById("taka").value;
    nv = document.getElementById("pname");
    av = document.getElementById("page");
    dv = document.getElementById("dname");
    vv = document.getElementById("vtaka");
    altr = document.getElementById("alt");
    ins = document.getElementById("dat");
    dat = getCurrentDateAsString();
    console.log(dat);
    nv.innerHTML = "<strong>Name: </strong>" + n;
    av.innerHTML = "<strong>Age: </strong>" + a;
    dv.innerHTML = "<strong>Name: </strong>" + d;
    vv.innerHTML  = "<strong>Visit Fee: </strong>" + v + " BDT";
    altr.innerHTML = "<strong>Data has been Saved and Ready for Print<strong>" ;
    ins.innerHTML = dat;
    var u = n+" "+d;
    var qrCodeURL = generateQRCode(u);
    console.log(qrCodeURL);
    
    // Remove the existing QR code image if any
    var existingQRImage = document.getElementById("qrImage");
    if (existingQRImage) {
      existingQRImage.remove();
    }
  
    // Create a new image element
    var qrImage = document.createElement("img");
    qrImage.id = "qrImage";
    qrImage.src = qrCodeURL;
    qrImage.alt = "QR Code";
  
    // Append the image to the QR div
    var qrDiv = document.getElementById("datt");
    qrDiv.appendChild(qrImage);
    document.getElementById("prbtn").style.display="block";
}