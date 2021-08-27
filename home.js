var images = [
  "https://images.crutchfieldonline.com/ImageBank/v20200717135900/core/learn/article/4741/Mobile-Lead-alpine-car-stereo.jpg",
  "https://cdn.shopify.com/s/files/1/0013/1960/0198/products/hd-off-road-wheels-truck-wheels-hd-off-road-hollow-point-wheels-black-milled-for-6x139-7-trucks-12500377927763_1200x1200.jpg?v=1585886965",
  "https://images.unsplash.com/photo-1551836989-b4622a17a792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1850&q=80",
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
];

var rightbtn = document.getElementById("rightbtn");
var leftbtn = document.getElementById("leftbtn");
var i = 0;
function setImage() {
  document.slide.src = images[i];
}
var time = 5000;
function slideImg() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setImage();
  setTimeout("slideImg()", time);
}
window.onload = slideImg();
rightbtn.addEventListener("click", function () {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setImage();
});

leftbtn.addEventListener("click", function () {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
  setImage();
});
