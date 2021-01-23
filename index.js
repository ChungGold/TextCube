//object
const deck = document.querySelectorAll('.deck');

//position start
let pos = 0;
const size = document.querySelectorAll('.textSlides')[0].clientWidth;

//carousel slide function

function left() {
    if (pos > 1086) {
        pos = pos - 1116;
    } else {
        pos++;
        for (let i = 0; i < deck.length; i++) {
            deck[i].style.transform = 'translateX(' + (-pos) + 'px)';
        }
    }
}

//apply function

setInterval(left, 1);

