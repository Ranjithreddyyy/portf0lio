function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function DownloadCV() {
  var pdfFile = "Ranjith.pdf";

  var link = document.createElement("a");
  link.href = pdfFile;
  link.download = "downloaded_file.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
