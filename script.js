alert("Welcome to QR Code Generator.");
const qrinput = document.querySelector("#input");
const btn = document.querySelector("#btn");
const img = document.querySelector("#qr-image");

btn.addEventListener("click", function () {
  const inputvalue = qrinput.value;
  console.log(inputvalue);

  if (!inputvalue) {
    alert("Please insert a valid URL.");
    return;
  } else {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}";
    img.alt = `QR code for this is ${inputvalue}`;
  }
});
