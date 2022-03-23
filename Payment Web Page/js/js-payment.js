var type;

webtype();

function webtype() {
  var score = decodeURIComponent(location.search.substr(1)).split('&');
  score.splice(0, 1);
  type = score[0];
  if (type != 1 & type != 2) {
    type = 0;
  }
}

if (type == 1) {
  type1.setAttribute("class", "visible");
  type2.setAttribute("class", "hidden");
}

if (type == 2) {
  type2.setAttribute("class", "visible");
  type1.setAttribute("class", "hidden");
}

var delay = 1, i = 0;
var elem, left;

function gomain() {
  i = 0;
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
      window.location.href='../index.html';
    }
}

var data1 = 0;
var data2 = 0;
var data3 = 0;
var data4 = 0;

bconfirm.disabled = true; 
monthselect.setAttribute("class", "select-month-zero");
yearselect.setAttribute("class", "select-year-zero");
yearselect.options[yearselect.selectedIndex].value = '0';
monthselect.options[monthselect.selectedIndex].value = '0';
  var sel = document.getElementById('yearselect');
  sel.options[0].setAttribute("class", "hidden");
  var sel = document.getElementById('monthselect');
  sel.options[0].setAttribute("class", "hidden");

  document.getElementById("yearselect").addEventListener("change", function(){
        if (yearselect.options[yearselect.selectedIndex].value != '0')   {
          yearselect.setAttribute("class", "select-year-ready");
          monthselect.setAttribute("class", "select-month-ready");
        }
        if (yearselect.options[yearselect.selectedIndex].value == '2019' & monthselect.options[monthselect.selectedIndex].value < 12 ) {
        datecheck.setAttribute("class", "check-false");
        datewrong.classList.remove("hidden");
        datewrong.classList.add("visible");
        monthselect.classList.add("red");
        data2 = 0;
      }
      else {
        datecheck.setAttribute("class", "check-true");
        datewrong.classList.remove("visible");
        datewrong.classList.add("hidden");
        monthselect.classList.remove("red");
        data2 = 1;
      }
        if (yearselect.options[yearselect.selectedIndex].value == '0' | monthselect.options[monthselect.selectedIndex].value == '0')   {
            if (monthselect.options[monthselect.selectedIndex].value == '0') { monthselect.classList.add("red"); }
            if (yearselect.options[yearselect.selectedIndex].value == '0') { yearselect.classList.add("red"); }
          datecheck.setAttribute("class", "check-false");
          datewrong.classList.remove("hidden");
          datewrong.classList.add("visible");
          data2 = 0;
        }

        if (data1 == 1 & data2 == 1 & data3 == 1 & data4 == 1) {
            bconfirm.setAttribute("class", "confirm-button-ready");
            bconfirm.disabled = false; 
        }
        else {
            bconfirm.setAttribute("class", "confirm-button");
            bconfirm.disabled = true; 
        }
    });

    document.getElementById("monthselect").addEventListener("change", function(){
      if (monthselect.options[monthselect.selectedIndex].value != '0')   {
          monthselect.setAttribute("class", "select-month-ready");
          yearselect.setAttribute("class", "select-year-ready");
        }
      if (yearselect.options[yearselect.selectedIndex].value == '2019' & monthselect.options[monthselect.selectedIndex].value < 12 ) {
        datecheck.setAttribute("class", "check-false");
        datewrong.classList.remove("hidden");
        datewrong.classList.add("visible");
        monthselect.classList.add("red");
        data2 = 0;
      }
      else {
        datecheck.setAttribute("class", "check-true");
        datewrong.classList.remove("visible");
        datewrong.classList.add("hidden");
        monthselect.classList.remove("red");
        data2 = 1;
      }
      if (yearselect.options[yearselect.selectedIndex].value == '0' | monthselect.options[monthselect.selectedIndex].value == '0')   {
        if (monthselect.options[monthselect.selectedIndex].value == '0') { monthselect.classList.add("red"); }
        if (yearselect.options[yearselect.selectedIndex].value == '0') { yearselect.classList.add("red"); }
          datecheck.setAttribute("class", "check-false");
          datewrong.classList.remove("hidden");
          datewrong.classList.add("visible");
          data2 = 0;
        }

        if (data1 == 1 & data2 == 1 & data3 == 1 & data4 == 1) {
            bconfirm.setAttribute("class", "confirm-button-ready");
            bconfirm.disabled = false; 
        }
        else {
            bconfirm.setAttribute("class", "confirm-button");
            bconfirm.disabled = true; 
        }
    });

  var today = new Date();
  var year = today.getFullYear();
  for (var i = year; i < year + 50; i++) {
    let newOption = new Option( i, i);
    yearselect.append(newOption);
    newOption.classList.add("active");
  }
  var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  for (var i = 1; i < 13; i++) {
    let newOption = new Option(i + " - " + m[i-1], i);
    monthselect.append(newOption);
    newOption.classList.add("active");
  }

  numin.value = "";

  numin.addEventListener('input', function() {
    if(numin.value.length >= 1) {
        numin.setAttribute("class", "input-num-ready");
        numin.value = cc_format(numin.value);
    }
    else {
        numin.classList.add("zero");
        data1 = 0;
    }
    if(numin.value.length == 19) {
        numcheck.setAttribute("class", "check-true");
        numwrong.classList.remove("visible");
        numwrong.classList.add("hidden");
        data1 = 1;
    }
    else {
        numcheck.setAttribute("class", "check-false");
        numwrong.classList.remove("hidden");
        numwrong.classList.add("visible");
        data1 = 0;
    }

    if (data1 == 1 & data2 == 1 & data3 == 1 & data4 == 1) {
        bconfirm.setAttribute("class", "confirm-button-ready");
        bconfirm.disabled = false; 
    }
    else {
        bconfirm.setAttribute("class", "confirm-button");
        bconfirm.disabled = true; 
    }
  });

  function checkDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}

function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  firstin.value = "";

  firstin.addEventListener('input', function() {
    if(firstin.value.length >= 1) {
        firstin.setAttribute("class", "input-num-ready");
    }
    else {
        firstin.classList.add("zero");
        data3 = 0;
    }
    if ( firstin.value.search(/\d/) == -1 ) {
        firstcheck.setAttribute("class", "check-true");
        firstwrong.classList.remove("visible");
        firstwrong.classList.add("hidden");
        data3 = 1;
    }
    else {
        firstcheck.setAttribute("class", "check-false");
        firstwrong.classList.remove("hidden");
        firstwrong.classList.add("visible");
        data3 = 0;
    }
    if(firstin.value.length == 0) {
        firstcheck.setAttribute("class", "check-false");
        data3 = 0;
    }
    
    if (data1 == 1 & data2 == 1 & data3 == 1 & data4 == 1) {
        bconfirm.setAttribute("class", "confirm-button-ready");
        bconfirm.disabled = false; 
    }
    else {
        bconfirm.setAttribute("class", "confirm-button");
        bconfirm.disabled = true; 
    }
  });

  lastin.value = "";

  lastin.addEventListener('input', function() {
    if(lastin.value.length >= 1) {
        lastin.setAttribute("class", "input-last-ready");
    }
    else {
        lastin.classList.add("zero");
        data4 = 0;
    }
    if ( lastin.value.search(/\d/) == -1 ) {
        lastcheck.setAttribute("class", "check-true");
        lastwrong.classList.remove("visible");
        lastwrong.classList.add("hidden");
        data4 = 1;
    }
    else {
        lastcheck.setAttribute("class", "check-false");
        lastwrong.classList.remove("hidden");
        lastwrong.classList.add("visible");
        data4 = 0;
    }
    if(lastin.value.length == 0) {
        lastcheck.setAttribute("class", "check-false");
        data4 = 0;
    }

    if (data1 == 1 & data2 == 1 & data3 == 1 & data4 == 1) {
        bconfirm.setAttribute("class", "confirm-button-ready");
        bconfirm.disabled = false; 
    }
    else {
        bconfirm.setAttribute("class", "confirm-button");
        bconfirm.disabled = true; 
    }
  });

