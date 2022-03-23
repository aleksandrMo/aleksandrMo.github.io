var delay = 1, i = 0;
var elem, left;
var type = 0;

function gofirst() {
    i = 0;
    type = 1;
    elem = document.getElementById('bmain');
    left = elem.offsetLeft;
    setTimeout(startTimer, delay);
}

function gosecond() {
    i = 0;
    type = 2;
    elem = document.getElementById('bmain');
    left = elem.offsetLeft;
    setTimeout(startTimer, delay);
}

function startTimer() {
    if (i < document.documentElement.clientWidth/64) {
        setTimeout(startTimer, delay);
        elem.style.left = left - i*100 - ((document.documentElement.clientWidth-1280)/2) + 'px';
    }
    i++;
    if(i > document.documentElement.clientWidth/64) { 
        if(type == 1) {window.location.href='sec-pages/payment.html?&1';}
        if(type == 2) {window.location.href='sec-pages/payment.html?&2';}
    }
}