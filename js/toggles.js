function toggleMenu() {
  var currentImage = document.getElementById("toggle-icon").src;
  if (currentImage.endsWith("/media/icons/close.svg")) {
    document.getElementById("toggle-icon").src = "./media/icons/menu.svg";
  } else if (currentImage.endsWith("/media/icons/menu.svg")) {
    document.getElementById("toggle-icon").src = "./media/icons/close.svg";
  }
}
