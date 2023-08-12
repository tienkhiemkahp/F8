var displayContent = document.getElementById("displayContent");
var originalText = displayContent.innerHTML;
var wordArray = originalText.split(" ");
var copyWordArray = [...wordArray];
var currentIndex = 0;
var intervalId;

function highlight() {
  wordArray[currentIndex] = `<span class="highlight">${wordArray[currentIndex]}</span>`;
  const updatedContent = wordArray.join(" ");
  displayContent.innerHTML = updatedContent;
  setTimeout(() => {
    wordArray[currentIndex] = copyWordArray[currentIndex];
    currentIndex++;
    if (currentIndex === wordArray.length) {
      currentIndex = 0;
    }
  }, 500);
}

function startHighlight() {
  intervalId = setInterval(highlight, 500);
}

function stopHighlight() {
  clearInterval(intervalId);
}

startHighlight();
