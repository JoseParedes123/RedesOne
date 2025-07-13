const questions = [
    {
        question: "¿Cuál es la capital del Imperio Bizantino?",
        options: ["París", "Roma", "Constantinopla", "Londres", "Estambul"],
        answer: "Constantinopla"
    },
    {
        question: "¿Qué imperio causó la caída de Constantinopla en 1453?",
        options: ["Español", "Romano", "Otomano", "Britanico", "RomanoGermánico"],
        answer: "Otomano"
    },
    {
        question: "¿Qué emperador bizantino es conocido por su ambicioso programa de reformas y por la construcción de la iglesia de Santa Sofía?",
        options: ["Justiniano", "Constantino", "Teodosio", "Heraclio", "Basilio"],
        answer: "Justiniano"
    },
    {
        question: "¿Cuál era el idioma oficial del Imperio Bizantino?",
        options: ["Latín", "Griego", "Turco", "Arabe", "Persa"],
        answer: "Griego"
    }
    // ... más preguntas
];

let score = 0;

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    const feedbackElement = document.getElementById('feedback');

    if (selectedOption) {
        if (selectedOption.value === "Constantinopla") { // Deberías hacerlo dinámico con el arreglo de preguntas
            feedbackElement.textContent = "¡Correcto, es Constantinopla!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer2() {
    const selectedOption = document.querySelector('input[name="q2"]:checked');
    const feedbackElement = document.getElementById('feedback2');

    if (selectedOption) {
        if (selectedOption.value === questions[1].answer) {
            feedbackElement.textContent = "¡Correcto, fue el Otomano!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer3() {
    const selectedOption = document.querySelector('input[name="q3"]:checked');
    const feedbackElement = document.getElementById('feedback3');

    if (selectedOption) {
        if (selectedOption.value === questions[2].answer) {
            feedbackElement.textContent = "¡Correcto, es Justiniano!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer4() {
    const selectedOption = document.querySelector('input[name="q4"]:checked');
    const feedbackElement = document.getElementById('feedback4');

    if (selectedOption) {
        if (selectedOption.value === questions[3].answer) {
            feedbackElement.textContent = "¡Correcto, es el Griego!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
const btn = document.getElementById('toggle-dark');
btn.onclick = () => {
    document.body.classList.toggle('dark-mode');
};