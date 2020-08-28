var images = [
  "./images/meeting-two.jpg",
  "./images/laptop1.jpg",
  "./images/laptop2.jpeg"
];
var num = 0;
setInterval(next, 3000);

function next() {
  slider = document.getElementById("frontImage");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  frontImage.src = images[num];
}

// function prev() {
//   //using the same variable as next button
//   slider = document.getElementById(slide);
//   num--;
//   if (num < 0) {
//     num = images.length - 1;
//   }
//   slide.src = images[num];
// }
