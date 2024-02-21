const questions = [
  {
    image: "enem/portugues/1.png",
    answer: "A",
    explanation: "enem/portugues/res/1.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/filosofia/1.png",
    answer: "E",
    explanation: "enem/filosofia/res/1.png",
    faculty: "Enem",
    subject: "Filosofia"
  },
  {
    image: "enem/ingles/1.png",
    answer: "D",
    explanation: "enem/ingles/res/1.png",
    faculty: "Enem",
    subject: "Ingles"
  },
  {
    image: "enem/ingles/2.png",
    answer: "E",
    explanation: "enem/ingles/res/2.png",
    faculty: "Enem",
    subject: "Ingles"
  },
  {
    image: "enem/ingles/3.png",
    answer: "C",
    explanation: "enem/ingles/res/3.png",
    faculty: "Enem",
    subject: "Ingles"
  },
  {
    image: "enem/ingles/4.png",
    answer: "D",
    explanation: "enem/ingles/res/4.png",
    faculty: "Enem",
    subject: "Ingles"
  },
  {
    image: "enem/ingles/5.png",
    answer: "B",
    explanation: "enem/ingles/res/5.png",
    faculty: "Enem",
    subject: "Ingles"
  },
  {
    image: "enem/portugues/2.png",
    answer: "D",
    explanation: "enem/portugues/res/2.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/3.png",
    answer: "D",
    explanation: "enem/portugues/res/3.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/4.png",
    answer: "C",
    explanation: "enem/portugues/res/4.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/5.png",
    answer: "A",
    explanation: "enem/portugues/res/5.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/6.png",
    answer: "B",
    explanation: "enem/portugues/res/6.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/7.png",
    answer: "D",
    explanation: "enem/portugues/res/7.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/8.png",
    answer: "C",
    explanation: "enem/portugues/res/8.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/9.png",
    answer: "C",
    explanation: "enem/portugues/res/9.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/portugues/10.png",
    answer: "E",
    explanation: "enem/portugues/res/10.png",
    faculty: "Enem",
    subject: "Portugues"
  },
  {
    image: "enem/literatura/6.png",
    answer: "A",
    explanation: "enem/literatura/res/6.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/7.png",
    answer: "B",
    explanation: "enem/literatura/res/7.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/8.png",
    answer: "E",
    explanation: "enem/literatura/res/8.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/9.png",
    answer: "B",
    explanation: "enem/literatura/res/9.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/10.png",
    answer: "C",
    explanation: "enem/literatura/res/10.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/1.png",
    answer: "B",
    explanation: "enem/literatura/res/1.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/2.png",
    answer: "E",
    explanation: "enem/literatura/res/2.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/3.png",
    answer: "D",
    explanation: "enem/literatura/res/3.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/4.png",
    answer: "C",
    explanation: "enem/literatura/res/4.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/literatura/5.png",
    answer: "A",
    explanation: "enem/literatura/res/5.png",
    faculty: "Enem",
    subject: "Literatura"
  },
  {
    image: "enem/quimica/1.png",
    answer: "C",
    explanation: "enem/quimica/res/1.png",
    faculty: "Enem",
    subject: "Quimica"
  },
  {
    image: "enem/quimica/2.png",
    answer: "B",
    explanation: "enem/quimica/res/2.png",
    faculty: "Enem",
    subject: "Quimica"
  },
  {
    image: "enem/quimica/3.png",
    answer: "C",
    explanation: "enem/quimica/res/3.png",
    faculty: "Enem",
    subject: "Quimica"
  },
  {
    image: "enem/quimica/4.png",
    answer: "B",
    explanation: "enem/quimica/res/4.png",
    faculty: "Enem",
    subject: "Quimica"
  },
  {
    image: "enem/quimica/5.png",
    answer: "B",
    explanation: "enem/quimica/res/5.png",
    faculty: "Enem",
    subject: "Quimica"
  },
  {
    image: "enem/geografia/1.png",
    answer: "A",
    explanation: "enem/geografia/res/1.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/2.png",
    answer: "C",
    explanation: "enem/geografia/res/2.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/3.png",
    answer: "D",
    explanation: "enem/geografia/res/3.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/4.png",
    answer: "D",
    explanation: "enem/geografia/res/4.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/5.png",
    answer: "A",
    explanation: "enem/geografia/res/5.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/6.png",
    answer: "E",
    explanation: "enem/geografia/res/6.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/7.png",
    answer: "B",
    explanation: "enem/geografia/res/7.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/8.png",
    answer: "B",
    explanation: "enem/geografia/res/8.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/9.png",
    answer: "C",
    explanation: "enem/geografia/res/9.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/10.png",
    answer: "E",
    explanation: "enem/geografia/res/10.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/11.png",
    answer: "D",
    explanation: "enem/geografia/res/11.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/12.png",
    answer: "A",
    explanation: "enem/geografia/res/12.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/geografia/13.png",
    answer: "D",
    explanation: "enem/geografia/res/13.png",
    faculty: "Enem",
    subject: "Geografia"
  },
  {
    image: "enem/historia/1.png",
    answer: "A",
    explanation: "enem/historia/res/1.png",
    faculty: "Enem",
    subject: "Historia"
  },
  {
    image: "enem/historia/2.png",
    answer: "A",
    explanation: "enem/historia/res/2.png",
    faculty: "Enem",
    subject: "Historia"
  },
  {
    image: "enem/historia/3.png",
    answer: "B",
    explanation: "enem/historia/res/3.png",
    faculty: "Enem",
    subject: "Historia"
  },
  {
    image: "enem/biologia/1.png",
    answer: "E",
    explanation: "enem/biologia/res/1.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/2.png",
    answer: "D",
    explanation: "enem/biologia/res/2.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/3.png",
    answer: "E",
    explanation: "enem/biologia/res/3.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/4.png",
    answer: "A",
    explanation: "enem/biologia/res/4.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/5.png",
    answer: "D",
    explanation: "enem/biologia/res/5.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/6.png",
    answer: "E",
    explanation: "enem/biologia/res/6.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/7.png",
    answer: "E",
    explanation: "enem/biologia/res/7.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/biologia/8.png",
    answer: "E",
    explanation: "enem/biologia/res/8.png",
    faculty: "Enem",
    subject: "Biologia"
  },
  {
    image: "enem/fisica/1.png",
    answer: "A",
    explanation: "enem/fisica/res/1.png",
    faculty: "Enem",
    subject: "Fisica"
  },
  {
    image: "enem/fisica/2.png",
    answer: "E",
    explanation: "enem/fisica/res/2.png",
    faculty: "Enem",
    subject: "Fisica"
  },
  {
    image: "enem/fisica/3.png",
    answer: "A",
    explanation: "enem/fisica/res/3.png",
    faculty: "Enem",
    subject: "Fisica"
  },
  {
    image: "enem/fisica/4.png",
    answer: "C",
    explanation: "enem/fisica/res/4.png",
    faculty: "Enem",
    subject: "Fisica"
  },
  {
    image: "enem/fisica/5.png",
    answer: "B",
    explanation: "enem/fisica/res/5.png",
    faculty: "Enem",
    subject: "Fisica"
  },
  {
    image: "enem/fisica/6.png",
    answer: "B",
    explanation: "enem/fisica/res/6.png",
    faculty: "Enem",
    subject: "Fisica"
  },
  {
    image: "enem/filosofia/4.png",
    answer: "C",
    explanation: "enem/filosofia/res/4.png",
    faculty: "Enem",
    subject: "Filosofia"
  },
  {
    image: "enem/filosofia/3.png",
    answer: "C",
    explanation: "enem/filosofia/res/3.png",
    faculty: "Enem",
    subject: "Filosofia"
  },

  {
    image: "enem/filosofia/2.png",
    answer: "C",
    explanation: "enem/filosofia/res/2.png",
    faculty: "Enem",
    subject: "Filosofia"
  },
  {
    image: "fuvest/portugues/1.png",
    answer: "E",
    explanation: "fuvest/portugues/res/1.png",
    faculty: "Fuvest",
    subject: "Portugues"
  },
  {
    image: "fuvest/portugues/2.png",
    answer: "D",
    explanation: "fuvest/portugues/res/2.png",
    faculty: "Fuvest",
    subject: "Portugues"
  },
  {
    image: "fuvest/portugues/3.png",
    answer: "C",
    explanation: "fuvest/portugues/res/3.png",
    faculty: "Fuvest",
    subject: "Portugues"
  },
  {
    image: "fuvest/portugues/4.png",
    answer: "A",
    explanation: "fuvest/portugues/res/4.png",
    faculty: "Fuvest",
    subject: "Portugues"
  },
  {
    image: "fuvest/literatura/1.png",
    answer: "D",
    explanation: "fuvest/literatura/res/1.png",
    faculty: "Fuvest",
    subject: "Literatura"
  },
  {
    image: "fuvest/literatura/2.png",
    answer: "C",
    explanation: "fuvest/literatura/res/2.png",
    faculty: "Fuvest",
    subject: "Literatura"
  },
  {
    image: "fuvest/historia/1.png",
    answer: "B",
    explanation: "fuvest/historia/res/1.png",
    faculty: "Fuvest",
    subject: "Historia"
  },
  {
    image: "fuvest/historia/2.png",
    answer: "C",
    explanation: "fuvest/historia/res/2.png",
    faculty: "Fuvest",
    subject: "Historia"
  },
  {
    image: "fuvest/historia/3.png",
    answer: "D",
    explanation: "fuvest/historia/res/3.png",
    faculty: "Fuvest",
    subject: "Historia"
  },
  {
    image: "fuvest/historia/4.png",
    answer: "C",
    explanation: "fuvest/historia/res/4.png",
    faculty: "Fuvest",
    subject: "Historia"
  },
  {
    image: "fuvest/quimica/1.png",
    answer: "A",
    explanation: "fuvest/quimica/res/1.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/quimica/2.png",
    answer: "B",
    explanation: "fuvest/quimica/res/2.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/quimica/3.png",
    answer: "C",
    explanation: "fuvest/quimica/res/3.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/quimica/4.png",
    answer: "C",
    explanation: "fuvest/quimica/res/4.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/quimica/5.png",
    answer: "E",
    explanation: "fuvest/quimica/res/5.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/quimica/6.png",
    answer: "B",
    explanation: "fuvest/quimica/res/6.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/quimica/7.png",
    answer: "C",
    explanation: "fuvest/quimica/res/7.png",
    faculty: "Fuvest",
    subject: "Quimica"
  },
  {
    image: "fuvest/biologia/1.png",
    answer: "E",
    explanation: "fuvest/biologia/res/1.png",
    faculty: "Fuvest",
    subject: "Biologia"
  },
  {
    image: "fuvest/biologia/2.png",
    answer: "B",
    explanation: "fuvest/biologia/res/2.png",
    faculty: "Fuvest",
    subject: "Biologia"
  },
  {
    image: "fuvest/biologia/3.png",
    answer: "C",
    explanation: "fuvest/biologia/res/3.png",
    faculty: "Fuvest",
    subject: "Biologia"
  },
  {
    image: "fuvest/biologia/4.png",
    answer: "C",
    explanation: "fuvest/biologia/res/4.png",
    faculty: "Fuvest",
    subject: "Biologia"
  },
  {
    image: "fuvest/geografia/1.png",
    answer: "B",
    explanation: "fuvest/geografia/res/1.png",
    faculty: "Fuvest",
    subject: "Geografia"
  },
  {
    image: "fuvest/geografia/2.png",
    answer: "D",
    explanation: "fuvest/geografia/res/2.png",
    faculty: "Fuvest",
    subject: "Geografia"
  },
  {
    image: "fuvest/geografia/3.png",
    answer: "A",
    explanation: "fuvest/geografia/res/3.png",
    faculty: "Fuvest",
    subject: "Geografia"
  },
  {
    image: "fuvest/geografia/4.png",
    answer: "A",
    explanation: "fuvest/geografia/res/4.png",
    faculty: "Fuvest",
    subject: "Geografia"
  },
  {
    image: "fuvest/geografia/5.png",
    answer: "D",
    explanation: "fuvest/geografia/res/5.png",
    faculty: "Fuvest",
    subject: "Geografia"
  },
  {
    image: "fuvest/geografia/6.png",
    answer: "E",
    explanation: "fuvest/geografia/res/6.png",
    faculty: "Fuvest",
    subject: "Geografia"
  },
  {
    image: "fuvest/filosofia/1.png",
    answer: "D",
    explanation: "fuvest/filosofia/res/1.png",
    faculty: "Fuvest",
    subject: "Filosofia"
  },
  {
    image: "fuvest/filosofia/2.png",
    answer: "C",
    explanation: "fuvest/filosofia/res/2.png",
    faculty: "Fuvest",
    subject: "Filosofia"
  },
  {
    image: "fuvest/ingles/1.png",
    answer: "A",
    explanation: "fuvest/ingles/res/1.png",
    faculty: "Fuvest",
    subject: "Filosofia"
  },
  {
    image: "fuvest/matematica/1.png",
    answer: "B",
    explanation: "fuvest/matematica/res/1.png",
    faculty: "Fuvest",
    subject: "Matematica"
  },
  {
    image: "fuvest/matematica/2.png",
    answer: "D",
    explanation: "fuvest/matematica/res/2.png",
    faculty: "Fuvest",
    subject: "Matematica"
  },
  {
    image: "fuvest/matematica/3.png",
    answer: "B",
    explanation: "fuvest/matematica/res/3.png",
    faculty: "Fuvest",
    subject: "Matematica"
  },
  {
    image: "fuvest/matematica/4.png",
    answer: "C",
    explanation: "fuvest/matematica/res/4.png",
    faculty: "Fuvest",
    subject: "Matematica"
  },
  {
    image: "fuvest/matematica/5.png",
    answer: "D",
    explanation: "fuvest/matematica/res/5.png",
    faculty: "Fuvest",
    subject: "Matematica"
  }
];

const selectionContainer = document.getElementById("selection-container");
const quizContainer = document.getElementById("quiz-container");
const facultySelect = document.getElementById("faculty");
const subjectSelect = document.getElementById("subject");
const startButton = document.getElementById("start-button");
const alternatives = document.getElementById("alternatives");
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("result");
const explanation = document.getElementById("explanation");
const nextButton = document.getElementById("next-button");
const explanationSection = document.getElementById("explanation-section");
let questionAnswered = false;
let correctAnswersCount = 0;

startButton.addEventListener("click", () => {
  const selectedFaculty = facultySelect.value;
  const selectedSubject = subjectSelect.value;

  const filteredQuestions = questions.filter(question => {
    return question.faculty === selectedFaculty && question.subject === selectedSubject;
  });

  if (filteredQuestions.length > 0) {
    const shuffledQuestions = shuffleArray(filteredQuestions);

    let currentQuestionIndex = 0;

    selectionContainer.style.display = "none";
    quizContainer.style.display = "block";

    function nextQuestion() {
      if (questionAnswered) {
        currentQuestionIndex++;
        result.textContent = "";
        explanation.textContent = "";
        explanation.classList.add("hidden");
        if (currentQuestionIndex < shuffledQuestions.length) {
          displayQuestion(currentQuestionIndex);
          questionAnswered = false;
          resetAlternatives();
        } else {
          explanation.textContent = "As questões acabaram!";
          showResultSummary();
        }
      }
    }

    submitButton.addEventListener("click", () => {
      if (!questionAnswered) {
        checkAnswer();
        questionAnswered = true;
      }
    });
    nextButton.addEventListener("click", nextQuestion);

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function displayQuestion(index) {
      const question = shuffledQuestions[index];
      quizContainer.querySelector("h1").textContent = `Questão ${index + 1}`;
      quizContainer.querySelector("img").src = question.image;

      const alternativesInputs = alternatives.querySelectorAll("input[type=radio]");
      alternativesInputs.forEach(input => {
        input.checked = false;
        input.disabled = false;
      });

      explanationSection.style.display = "none";
    }

    function checkAnswer() {
      const selectedAlternative = document.querySelector('input[name="alternative"]:checked');
      if (!selectedAlternative) {
        result.textContent = "Selecione uma alternativa.";
        enableAlternatives();
        return;
      }
      if (selectedAlternative.value === shuffledQuestions[currentQuestionIndex].answer) {
        result.textContent = "Resposta Correta!";
        result.classList.remove("result-incorrect");
        result.classList.add("result-correct");
        correctAnswersCount++;
      } else {
        result.textContent = "Resposta Incorreta.";
        result.classList.remove("result-correct");
        result.classList.add("result-incorrect");
      }

      const explanationSection = document.getElementById("explanation-section");
      explanationSection.style.display = "block";
      const explanation = document.getElementById("explanation");
      explanation.textContent = "Explicação:";
      const explanationImg = document.getElementById("explanation-image");
      explanationImg.src = shuffledQuestions[currentQuestionIndex].explanation;
      explanationImg.style.display = "block";
    }

    function showResultSummary() {
      const percentage = (correctAnswersCount / shuffledQuestions.length) * 100;

      window.location.href = `resultado.html?correct=${correctAnswersCount}&total=${shuffledQuestions.length}&percentage=${percentage.toFixed(2)}`;
    }

    displayQuestion(currentQuestionIndex);
  } else {
    alert("Não há questões disponíveis para a seleção feita. Selecione outras opções.");
  }
});