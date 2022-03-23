var countDownDate = new Date("2020, 2, 20").getTime();


var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById("time").innerHTML = days + "d : " + hours + "h : " + minutes + "m";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);