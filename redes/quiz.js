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
    },
    {
        question: "Cual es la estrella más cercana a la Tierra?",
        options: ["Proxima Centauri", "Sirius", "Betelgeuse", "UY Scuti", "Sol"],
        answer: "Proxima Centauri"
    },
    {
        question: "¿Cómo se llama nuestra galaxia?",
        options: ["Andrómeda", "Vía Láctea", "Triángulo", "Sombrero", "Magallanes"],
        answer: "Vía Láctea"
    },
    {
        question: "¿Qué fenómeno ocurre cuando una estrella masiva explota al final de su vida?",
        options: ["Supernova", "Eclipse", "Tránsito planetario", "Lluvia de meteoros", "Aurora Boreal"],
        answer: "Supernova"
    },
    {
        question: "¿Cuál es el nombre del agujero negro supermasivo en el centro de la Vía Láctea?",
        options: ["Sagitario A", "Andromeda A","Cygnus X-1","Betelgeuse","Proxima Centauri"],
        answer: "Sagitario A"
    },
    {
        question: "¿A qué grupo pertenecen los dinosaurios carnívoros como el T. rex y Velociraptor?",
        options: ["Ornitisquios", "Saurisquios", "Saurópodos", "Pterosaurios"],
        answer: "Saurisquios"
    },
    {
        question: "¿Cuál de estos dinosaurios era un herbívoro con placas óseas en la espalda?",
        options: ["Velociraptor", "Stegosaurus", "Tyrannosaurus rex", "Argentinosaurus"],
        answer: "Stegosaurus"
    },
    {
        question: "¿Qué grupo de dinosaurios evolucionó en las aves actuales?",
        options: ["Ornitisquios", "Saurisquios", "Saurópodos", "Pterosaurios"],
        answer: "Saurisquios"
    },
    {
        question: "¿Cuál es el dinosaurio más grande conocido hasta ahora?",
        options: ["Tyrannosaurus rex", "Argentinosaurus", "Velociraptor", "Ankylosaurus"],
        answer: "Argentinosaurus"
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
}
function checkAnswer5() {
    const selectedOption = document.querySelector('input[name="q5"]:checked');
    const feedbackElement = document.getElementById('feedback5');

    if (selectedOption) {
        if (selectedOption.value === "Proxima Centauri") {
            feedbackElement.textContent = "¡Correcto, es Proxima Centauri!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer6() {
    const selectedOption = document.querySelector('input[name="q6"]:checked');
    const feedbackElement = document.getElementById('feedback6');

    if (selectedOption) {
        if (selectedOption.value === "Vía Láctea") {
            feedbackElement.textContent = "¡Correcto, es la Vía Láctea!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer7() {
    const selectedOption = document.querySelector('input[name="q7"]:checked');
    const feedbackElement = document.getElementById('feedback7');

    if (selectedOption) {
        if (selectedOption.value === "Supernova") {
            feedbackElement.textContent = "¡Correcto, es una Supernova!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer8() {
    const selectedOption = document.querySelector('input[name="q8"]:checked');
    const feedbackElement = document.getElementById('feedback8');

    if (selectedOption) {
        if (selectedOption.value === "Sagitario A") {
            feedbackElement.textContent = "¡Correcto, es Sagitario A!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer9() {
    const selectedOption = document.querySelector('input[name="q9"]:checked');
    const feedbackElement = document.getElementById('feedback9');

    if (selectedOption) {
        if (selectedOption.value === "Saurisquios") {
            feedbackElement.textContent = "¡Correcto, son los Saurisquios!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer10() {
    const selectedOption = document.querySelector('input[name="q10"]:checked');
    const feedbackElement = document.getElementById('feedback10');

    if (selectedOption) {
        if (selectedOption.value === "Stegosaurus") {
            feedbackElement.textContent = "¡Correcto, es el Stegosaurus!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer11() {
    const selectedOption = document.querySelector('input[name="q11"]:checked');
    const feedbackElement = document.getElementById('feedback11');

    if (selectedOption) {
        if (selectedOption.value === "Saurisquios") {
            feedbackElement.textContent = "¡Correcto, son los Saurisquios!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}
function checkAnswer12() {
    const selectedOption = document.querySelector('input[name="q12"]:checked');
    const feedbackElement = document.getElementById('feedback12');

    if (selectedOption) {
        if (selectedOption.value === "Argentinosaurus") {
            feedbackElement.textContent = "¡Correcto, es el Argentinosaurus!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}