var images = [
  "https://www.elite-tint.com/wp-content/uploads/2016/08/DSC01215-1200x800.jpeg",
  "https://m.media-amazon.com/images/I/51kjonfTzbL._SL1000_.jpg",
  "https://www.tintingchicago.com/wp-content/uploads/2015/08/0780-red-window-tint.jpg",
];

var right = document.getElementById("rights");

var left = document.getElementById("lefts");
time = 5000;
var i = 0;
function setImage() {
  document.slide.src = images[i];
}

window.onload = slideImg();
function slideImg() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setImage();
  setTimeout("slideImg()", time);
}

right.addEventListener("click", function () {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setImage();
});

left.addEventListener("click", function () {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
  setImage();
});

document.getElementById("bro").src =
  "https://static.wixstatic.com/media/1e667d_7867f6376eb441fbb1c8b1d8fd21f692~mv2.jpg/v1/fill/w_1215,h_683,al_c,q_85,usm_0.66_1.00_0.01/LLumarDigitalPricingBoard-Horizontal%20-%20V.webp";
