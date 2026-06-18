function upDate(previewPic) {
  console.log("Preview event triggered.");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
}

function unDo() {
  console.log("Preview reset triggered.");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = 'url("")';
  imageDiv.textContent = "Dua chuot hoac tab den mot hinh anh ben duoi de hien thi o day.";
}

function addTabFocus() {
  console.log("Onload event triggered. Adding tabindex to images.");

  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex to image:", images[i].alt);
  }
}
