const questions = [
    {
        question: "¿Qué fue el ENIAC?",
        options: ["Una computadora", "Un robot", "Un software", "Un lenguaje de programación", "Un videojuego"],
        answer: "Una computadora"
    },
    {
        question: "¿En que año se desarrollo el ENIAC?",
        options: ["1943", "1945", "1946", "1950", "1952"],
        answer: "1945"
    },
    {
        question: "Que mujeres participaron en la programacion del ENIAC?",
        options: ["Ada Lovelace", "Grace Hopper", "Kay McNulty y equipo", "Marie Curie", "Rosalind Franklin"],
        answer: "Kay McNulty y equipo"
    },
    {
        question: "Como se programaba el ENIAC?",
        options: ["Con tarjetas perforadas", "Con cintas magnéticas", "Con interruptores y cables", "Con comandos de voz", "Con un teclado"],
        answer: "Con interruptores y cables"
    },
//2 parte
    {
        question: "¿Cuál fue uno de los primeros dispositivos de cálculo usados por la humanidad?",
        options: ["Abaco", "Calculadora", "Computadora", "Teléfono", "Televisor"],
        answer: "Ábaco"
    },
    {
        question: "¿Cual se considera la primera computadora electronica de proposito general?",
        options: ["UNIVAC", "ENIAC", "IBM 701", "Colossus", "Z3"],
        answer: "ENIAC"
    },
    {
        question: "¿Qué invento permitió la miniaturización y mayor velocidad de las computadoras en la segunda generación?",
        options: ["Transistores", "Circuitos integrados", "Microprocesadores", "Memoria RAM", "Discos duros"],
        answer: "Transistores"
    },
    {
        question: "¿Qué avance tecnológico permitió la creación de computadoras personales en los años 70?",
        options: ["Microprocesadores", "Transistores", "Circuitos integrados", "Memoria RAM", "Discos duros"],
        answer: "Microprocesador"

    },
    {
        question: "¿Cuál de los siguientes es un ejemplo de computación en la actualidad?",
        options: ["Dispositivos moviles", "Mainframes", "Supercomputadoras", "Computación en la nube", "Tarjetas perforadas"],
        answer : "Computación en la nube"
    },
    {
//3ra parte
    question: "¿Quien fue la primera programadora de la historia?",
    options: ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Bill Gates"],
    answer: "Ada Lovelace"
    },
    {
    question : "¿Cuál de estos lenguajes fue creado para facilitar el aprendizaje de la programación?",
    options: ["Python", "Java", "C++", "Ruby"],
    answer: "Python"
    },
    {
    question: "¿Qué lenguaje es ampliamente usado en ciencia de datos e inteligencia artificial?",
    options: ["Python", "Java", "PHP", "C"],
    answer: "Python"
    },
    {
    question: "¿Cuál de estos es un lenguaje de bajo nivel?",
    options: ["Ensamblador", "JavaScript", "Ruby", "C#"],
    answer: "Ensamblador"
    }
    

];

let score = 0;

function checkAnswer1() {
    const selectedOption = document.querySelector('input[name="q1"]:checked');
    const feedbackElement = document.getElementById('feedback');

    if (selectedOption) {
        if (selectedOption.value === questions[0].answer) { // Deberías hacerlo dinámico con el arreglo de preguntas
            feedbackElement.textContent = "¡Correcto, la ENIAC fue la primera computadora!";
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
            feedbackElement.textContent = "¡Correcto, en 1945!";
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
            feedbackElement.textContent = "¡Correcto, Kay McNulty y su equipo!";
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
            feedbackElement.textContent = "¡Correcto, son los cables e interruptores!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }
}


//parte 2

function checkAnswer5() {
    const selectedOption = document.querySelector('input[name="q5"]:checked');
    const feedbackElement = document.getElementById('feedback5');

    if (selectedOption) {
        if (selectedOption.value === questions[4].answer) {
            feedbackElement.textContent = "¡Correcto, es el abaco!";
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
        if (selectedOption.value === questions[5].answer) {
            feedbackElement.textContent = "¡Correcto, es la ENIAC!";
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
        if (selectedOption.value === questions[6].answer) {
            feedbackElement.textContent = "¡Correcto, es el transistor!";
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
        if (selectedOption.value === questions[7].answer) {
            feedbackElement.textContent = "¡Correcto, es el Microprocesador!";
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
        if (selectedOption.value === questions[8].answer) {
            feedbackElement.textContent = "¡Correcto, la Computación en la mube!";
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
        if (selectedOption.value === questions[9].answer) {
            feedbackElement.textContent = "¡Correcto, es Ada Lovelace!";
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
        if (selectedOption.value === questions[10].answer) {
            feedbackElement.textContent = "¡Correcto, es Python!";
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
        if (selectedOption.value === questions[11].answer) {
            feedbackElement.textContent = "¡Correcto, es Python!";
            score++;
        } else {
            feedbackElement.textContent = "Incorrecto. Vuelve a intentarlo.";
        }
        console.log("Puntaje actual: " + score);
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
    }

}

// Al cargar la página, aplica el modo guardado
 // ...existing code...

// Modo oscuro global usando localStorage
function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Al cargar la página, aplica el modo guardado
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Botón para alternar el modo
const btn = document.getElementById('toggle-dark');
if (btn) {
    btn.onclick = () => {
        const enabled = !document.body.classList.contains('dark-mode');
        setDarkMode(enabled);
    }
}

// ...resto de tu código...
    

 




