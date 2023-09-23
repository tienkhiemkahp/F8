var body = document.body;
var primaryBtn = document.querySelector(".btn-primary");
var menu = document.querySelector(".dropdown-menu");
var textContent = document.querySelector(".text-content-area");
var quantity = document.querySelector(".text-quantity");
var characterCount = quantity.querySelector(".character-count");
var wordCount = quantity.querySelector(".word-count");
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
