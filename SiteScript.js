let numbersNames = new NumbersNamer(42);
let SiteState = {
    buttonState: 'asnwering',
    task1Number:-1,
    task1Text:'',
    task1Answer:'',
    task2Number:-1,
    task2Text:'',
    task2Answer:'',
    score:0
}
let task1Text = document.getElementById("task1Text");
let answerInput = document.getElementById("answerInput");
let buttonAnswer = document.getElementById('answerButton');
let scoreDiv = document.getElementById('div-scores');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function button_onClicked() {
    console.log('yo');
    if (SiteState.buttonState == 'asnwering') {
        if (answerInput.value == SiteState.task1Answer) {
            alert('ПРАВИЛЬНО!');
            SiteState.score++;
        }
        else {
            alert('НЕ ПРАВИЛЬНО');
            SiteState.score = 0;
        }
        SiteState.buttonState = 'continuing';
        buttonAnswer.innerHTML = 'Продолжить!';
        setScore();
    } else {
        SiteState.buttonState = 'asnwering';
        buttonAnswer.innerHTML = 'Ответить!';
        setNewTask1();
    }
    
    
}

function setScore() {
    scoreDiv.innerHTML = `Ваши очки: ${SiteState.score}`;
}

function setNewTask1() {
    let r = getRandomInt(9) + 1;
    let numberUntil = 1;
    for(let i =0; i< r; i++) {
        numberUntil *= 10;
    }
    SiteState.task1Number = getRandomInt(numberUntil);
    SiteState.task1Text = numbersNames.getNominative(SiteState.task1Number);
    SiteState.task1Answer = '' + SiteState.task1Number;
    task1Text.innerHTML = SiteState.task1Text;
}


setNewTask1();