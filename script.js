const correctAnswers = {
  1: "César",
  2: "Angel",
  3: "Celos",
  4: "Amenaza",
  5: "Marcos Witt",
  6: "Enterada",
};

function answer(riddleNumber) {
  const inputElement = document.getElementById(`answer${riddleNumber}`);
  const userAnswer = inputElement.value.trim();

  if (userAnswer.toLowerCase() === correctAnswers[riddleNumber].toLowerCase()) {
    const riddles = document.querySelectorAll(".riddle-container");
    if (riddleNumber < riddles.length) {
      riddles[riddleNumber].style.display = "block";
    }
  } else {
    alert("No papu");
  }
}
