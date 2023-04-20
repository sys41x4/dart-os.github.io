
// Generate QR Code Image
function generateQRCode(elementId, data="DART OS", width = 1000, height = 1000) {
  var element = document.getElementById(elementId);
  if (element && element.hasChildNodes()) {
    return;
  }
  var qrcode = new QRCode(element, {
    width: width,
    height: height,
  });

  // Generate the QR code image
  qrcode.makeCode(data);
};

function load_qr_codes() {
  // generateQRCode("qrcode-test", "DART OS TEST QR", 250, 250);
  // Create all qr codes starting with the id : div[id^="qr-img-"]
  const qr_elements = document.querySelectorAll('div[id^="qr-img-"]');

  for (let i = 0; i < qr_elements.length; i++) {
    generateQRCode(qr_elements[i].id, qr_elements[i].getAttribute("data"), 250, 250);
  }
  
};

window.onload = function() {
  console.log("Loading QR CODES");
  setTimeout(function() {
    load_qr_codes();
  }, 1000);
  console.log("Loaded QR CODES");
}