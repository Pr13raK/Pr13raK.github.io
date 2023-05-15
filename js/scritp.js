const questions = [
    'NUMBER1 + NUMBER2',
    'LIST = []',
    'LEN(STRING)',
    'SORTED(LIST)',
    'PRINT ("I", "LIKE", "PYTHON", SEP="***")',

    '<H1></H1>',
    '<BUTTON></BUTTON>',
    '<A HREF=""></A>',
    '<IMG SRC="">',
    '<LINK REL="STYLESHEET" HREF="">',

    'BACKGROUND-COLOR: WHITE;',
    'FONT-SIZE: 20PX;',
    'PADDING: 30PX;',
    'FONT-FAMILY: ARIAL;',
    'BACKGROUND-IMAGE: LINEAR-GRADIENT(TO RIGHT, WHITE, BLACK);',

    'IF () {} ELSE {}',
    'CONSOLE.WRITELINE("ТЕКСТ ДЛЯ ВЫВОДА В КОНСОЛЬ");',
    'CONSOLE.READLINE();',
    'INPUTSTRING.LENGTH;',
    'FOR (INT I = 0; I < ARR.LENGHT; I++) {}',

    'DELAY(1000);',
    'INT PIN = 5;',
    'DIGITALWRITE(PIN, HIGH);',
    'DIGITALREAD(PIN);',
    'SERIAL.PRINTLN("9600");',

    'ПРИЛАГАТЕЛЬНОЕ',
    'THE,A,AN',
    'ED',
    'THE',
    'S',

    'TRUE'
];
const points = [
    100, 200, 300, 400, 500,
    100, 200, 300, 400, 500,
    100, 200, 300, 400, 500,
    100, 200, 300, 400, 500,
    100, 200, 300, 400, 500,
    100, 200, 300, 400, 500,
    1000
];

window.onload = function () {
    function myFunc() {

        const input = document.getElementById('input').value.toUpperCase();
        const index = questions.indexOf(input);
        let score = 0;

        if (index !== -1) {
            if (points[index] !== undefined) {
                score = points[index];
                console.log("правильно");
            }
        } else {
            console.log("неверный ввод");
            score = -300;
        }

        updateScore(score);
    }

    function updateScore(score) {
        let currentScore = localStorage.getItem("score");
        currentScore = currentScore ? Number(currentScore) : 0;
        const newScore = currentScore + score;
        localStorage.setItem("score", newScore);
        document.querySelector('#score').textContent = newScore;
        return newScore;
    }

    document.getElementById('submit').onclick = myFunc;
};

let totalScore = localStorage.getItem('score');
document.querySelector('#score').textContent = totalScore;



var links = document.querySelectorAll('td');

// Восстанавливаем состояние зачеркивания ссылок из localStorage
links.forEach(function(link) {
  var value = link.getAttribute('value');
  if (localStorage.getItem(value)) {
    link.style.textDecoration = 'line-through';
  }
});

// Добавляем обработчик события для всех ссылок
links.forEach(function(link) {
  link.addEventListener('click', function() {
    toggleLinkDecoration(link);
  });
});

// Функция для изменения состояния зачеркивания ссылки
function toggleLinkDecoration(link) {
  var value = link.getAttribute('value');
  if (link.style.textDecoration === 'line-through') {
    link.style.textDecoration = 'none';
    localStorage.removeItem(value);
  } else {
    link.style.textDecoration = 'line-through';
    localStorage.setItem(value, 'true');
  }
}