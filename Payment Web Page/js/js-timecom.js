var delay = 1, k = 0, comtype = 1, m = 0;
            var change = 150;

            appear();

            function appear() {
                k = 0;
                setTimeout(startTimer3, delay);
            }

            function startTimer3() {
                if (k < change) {
                    setTimeout(startTimer3, 50);
                }
                if (k == change - 2) {
                    if (comtype == 1 & k != 0) {
                        m = 0;
                        opacityout1();
                        m = 0;
                        opacityin2();
                        k = 0;
                        comtype = 2;
                    }
                    if (comtype == 2 & k != 0) {
                        m = 0;
                        opacityout2();
                        m = 0;
                        opacityin3();
                        k = 0;
                        comtype = 3;
                    }
                    if (comtype == 3 & k != 0) {
                        m = 0;
                        opacityout3();
                        m = 0;
                        opacityin1();
                        k = 0;
                        comtype = 1;
                    }
                }
                k++;
            }
var speed = 60;
            function opacityout1() {
                if (m < 11) {
                    document.getElementById("com11").style.opacity = 1 - m/10;
                    document.getElementById("com21").style.opacity = 1 - m/10;
                    console.log(1 - m/10);
                    setTimeout(opacityout1, speed);
                }
                m++;
                if (m == 10) {
                    com11.classList.add("hidden");
                    com11.classList.remove("visible");
                    com12.classList.remove("hidden");
                    com12.classList.add("visible");

                    com21.classList.add("hidden");
                    com21.classList.remove("visible");
                    com22.classList.remove("hidden");
                    com22.classList.add("visible");

                    d1.classList.remove("dot1");
                    d1.classList.add("dot2");
                    d2.classList.remove("dot2");
                    d2.classList.add("dot1");
                    d3.classList.remove("dot3");
                    d3.classList.add("dot2");
                }
            }

            function opacityin1() {
                if (m < 11) {
                    document.getElementById("com11").style.opacity = m/10;
                    document.getElementById("com21").style.opacity = m/10;
                    console.log(m/10);
                    setTimeout(opacityin1, speed);
                }
                m++;
            }

            function opacityout2() {
                if (m < 11) {
                    document.getElementById("com12").style.opacity = 1 - m/10;
                    document.getElementById("com22").style.opacity = 1 - m/10;
                    console.log(1 - m/10);
                    setTimeout(opacityout2, speed);
                }
                m++;
                if (m == 10) {
                    com12.classList.add("hidden");
                    com12.classList.remove("visible");
                    com13.classList.remove("hidden");
                    com13.classList.add("visible");

                    com22.classList.add("hidden");
                    com22.classList.remove("visible");
                    com23.classList.remove("hidden");
                    com23.classList.add("visible");

                    d1.classList.remove("dot2");
                    d1.classList.add("dot3");
                    d2.classList.remove("dot1");
                    d2.classList.add("dot2");
                    d3.classList.remove("dot2");
                    d3.classList.add("dot1");
                }
            }

            function opacityin2() {
                if (m < 11) {
                    document.getElementById("com12").style.opacity = m/10;
                    document.getElementById("com22").style.opacity = m/10;
                    console.log(m/10);
                    setTimeout(opacityin2, speed);
                }
                m++;
            }

            function opacityout3() {
                if (m < 11) {
                    document.getElementById("com13").style.opacity = 1 - m/10;
                    document.getElementById("com23").style.opacity = 1 - m/10;
                    console.log(1 - m/10);
                    setTimeout(opacityout3, speed);
                }
                m++;
                if (m == 10) {
                    com13.classList.add("hidden");
                    com13.classList.remove("visible");
                    com11.classList.remove("hidden");
                    com11.classList.add("visible");

                    com23.classList.add("hidden");
                    com23.classList.remove("visible");
                    com21.classList.remove("hidden");
                    com21.classList.add("visible");

                    d1.classList.remove("dot3");
                    d1.classList.add("dot1");
                    d3.classList.remove("dot1");
                    d3.classList.add("dot3");
                }
            }

            function opacityin3() {
                if (m < 11) {
                    document.getElementById("com13").style.opacity = m/10;
                    document.getElementById("com23").style.opacity = m/10;
                    console.log(m/10);
                    setTimeout(opacityin3, speed);
                }
                m++;
            }