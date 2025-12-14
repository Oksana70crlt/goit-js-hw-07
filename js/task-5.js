const changeColorBtn = document.querySelector(".change-color");
const colorValueSpan = document.querySelector(".color");
const bodyEl = document.body;

changeColorBtn.addEventListener("click", () => {  // Додаємо обробник події click на кнопку
  const newColor = getRandomHexColor();           // Генеруємо випадковий колір
  bodyEl.style.backgroundColor = newColor;        // Змінюємо колір фону тіла документа 
  colorValueSpan.textContent = newColor;         // Відображаємо значення кольору в спані
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
