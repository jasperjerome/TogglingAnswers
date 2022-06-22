const addBtns = document.querySelectorAll('.add_btn');
const answerOne = document.querySelector('.answer_1');
const answerTwo = document.querySelector('.answer_2');
const answerThree = document.querySelector('.answer_3');

addBtns.forEach(function(addBtn) {
    addBtn.addEventListener('click', function(e) {
        const btns = e.currentTarget.classList;
        console.log(btns);
        if(btns.contains('btn1')) {
            answerOne.classList.toggle('open-answer');
            answerTwo.classList.remove('open-answer');
            answerThree.classList.remove('open-answer');
        }
        else if(btns.contains('btn2')) {
            answerTwo.classList.toggle('open-answer');
            answerOne.classList.remove('open-answer');
            answerThree.classList.remove('open-answer');
        }
        else if(btns.contains('btn3')) {
            answerThree.classList.toggle('open-answer');
            answerTwo.classList.remove('open-answer');
            answerOne.classList.remove('open-answer');
        }
        else {
            answerOne.classList.remove('open-answer');
        }
    })
})