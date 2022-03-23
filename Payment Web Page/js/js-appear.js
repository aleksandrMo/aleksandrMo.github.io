var delay = 1, i = 0, l = 0;
var elem, left, end;
var start = 25;

appear();

function appear() {
    i = 0;
    l = 0;
    type = 1;
    elem = document.getElementById('bmain');
    left = elem.offsetLeft;
    end = (document.documentElement.clientWidth+1280)/100;
    document.getElementById("bmain").style.opacity = 0;
    setTimeout(wait, delay);
}

function wait() {
    if (l < start) {
        setTimeout(wait, delay);
    }
    l++;
    if(l == start-1){ 
        setTimeout(startTimer2, delay); 
    }
}

function startTimer2() {
    if (i < 11) {
        document.getElementById("bmain").style.opacity = i/10;
        setTimeout(startTimer2, delay);
    }
    i++;
}