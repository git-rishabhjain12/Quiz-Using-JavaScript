const data = [
  {
    question: "Q1. 8 * 7",
    answer: 56,
    options: [65, 56, 45, 98],
  },
  {
    question: "Q2. 9 * 4",
    answer: 36,
    options: [87, 45, 23, 36],
  },
  {
    question: "Q3. 110 - 78",
    answer: 32,
    options: [32, 44, 31, 35],
  },
  {
    question: "Q4. 86 / 2",
    answer: 43,
    options: [41, 10, 22, 43],
  },
  {
    question: "Q5. 22 + 32",
    answer: 54,
    options: [34, 40, 62, 54],
  },
];

const startBtn = document.querySelector("#start");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");
const resultCount = document.querySelector("#screen3 span");
const timer = document.querySelector(".timer");
const questionPrint = document.querySelector(".question");
const optionsPrint = document.querySelector(".options");
const resetBtn = document.querySelector("#reset");
let currentQuestion = 0;
let score = 0;

startBtn.onclick = () => {
  screen1.style.display = "none";
  screen2.style.display = "flex";
  // questionTimer();
  printQuestion();
};

function questionTimer() {
  timer.innerHTML = 5;
  let clear = setInterval(() => {
    if (timer.innerHTML > 0) {
      timer.innerHTML = timer.innerHTML - 1;
    } else {
      clearInterval(clear);
      checkAnswer();
      currentQuestion++;
      printQuestion();
      questionTimer();
    }
  }, 1000);
}

function printQuestion() {
  if (currentQuestion < data.length) {
    questionPrint.innerHTML = data[currentQuestion].question;
    optionsPrint.innerHTML = "";

    for (i = 0; i < data[currentQuestion].options.length; i++) {
      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      let label = document.createElement("label");
      label.innerHTML = data[currentQuestion].options[i];
      optionsPrint.append(checkbox);
      optionsPrint.append(label);
    }
  } else {
    screen2.style.display = "none";
    screen3.style.display = "flex";
    resultCount.innerHTML = `${score}/${data.length}`;
  }
}

function checkAnswer() {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  let selectedOption = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedOption.push(checkbox.nextElementSibling.innerHTML);
    }
  });
  const correctAnswer = data[currentQuestion].answer;
  if (selectedOption.length === 1 && selectedOption[0] == correctAnswer) {
    score++;
  }
  printQuestion();
}

resetBtn.onclick = () => {
  screen3.style.display = "none";
  screen1.style.display = "flex";
};
