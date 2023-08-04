let imgContainer = document.querySelector(".image-container");
let btn = document.querySelector(".btn");
let imgNumber = 9;

function addNewImages() {
  for (let i = 0; i < imgNumber; i++) {
    let newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imgContainer.appendChild(newImg);
  }
}

btn.addEventListener("click", function () {
  addNewImages();
});
