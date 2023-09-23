var body = document.body;
var primaryBtn = document.querySelector(".btn-primary");
var menu = document.querySelector(".dropdown-menu");
var textContent = document.querySelector(".text-content-area");
var quantity = document.querySelector(".text-quantity");
var characterCount = quantity.querySelector(".character-count");
var wordCount = quantity.querySelector(".word-count");
var newBtn = document.querySelector(".new-btn");
var txtBtn = document.querySelector(".txt-btn");
var pdfBtn = document.querySelector(".pdf-btn");
var fileNameInput = document.querySelector(".file-name-input");
var boldBtn = document.querySelector(".btn-bold");
var underlinedBtn = document.querySelector(".btn-underlined");
var italicsBtn = document.querySelector(".btn-italics");
var colorInput = document.querySelector(".text-color-input");

primaryBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    body.addEventListener("mouseup", function () {
      menu.classList.remove("show");
    });
  }
});

textContent.addEventListener("input", function () {
  var characters = textContent.innerText.trim();
  characterCount.innerText = `Số ký tự: ${characters.length}`;

  var sentence = characters.split(/\s+/).filter(Boolean);
  wordCount.innerText = `Số từ: ${sentence.length}`;
});

boldBtn.addEventListener("click", function () {
  document.execCommand("bold", false, null);
});

underlinedBtn.addEventListener("click", function () {
  document.execCommand("underline", false, null);
});

italicsBtn.addEventListener("click", function () {
  document.execCommand("italic", false, null);
});

colorInput.addEventListener("input", function () {
  document.execCommand("foreColor", false, this.value);
});

function getFileName() {
  var fileName = fileNameInput.value;
  return fileName;
}

fileNameInput.addEventListener("input", getFileName);

newBtn.addEventListener("click", () => {
  fileName = getFileName();
  textContent.innerText = "";
});

txtBtn.addEventListener("click", () => {
  fileName = getFileName();

  var blob = new Blob([textContent.innerText], { type: "text/plain" });
  var url = URL.createObjectURL(blob);
  var link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.txt`;
  link.click();
});

pdfBtn.addEventListener("click", () => {
  html2pdf(textContent).save(fileName);
});
