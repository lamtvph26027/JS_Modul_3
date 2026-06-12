function upDate(previewPic) {
  console.log("Sự kiện xem trước đã kích hoạt.");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
}

function unDo() {
  console.log("Sự kiện hoàn tác đã kích hoạt.");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = 'url("")';
  imageDiv.textContent = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}

function addTabFocus() {
  console.log("Sự kiện onload đã kích hoạt. Đang thêm tabindex cho ảnh.");

  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh:", images[i].alt);
  }
}
