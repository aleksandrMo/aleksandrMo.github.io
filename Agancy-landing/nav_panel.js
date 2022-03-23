const e = React.createElement; 
var position = false; 
var anim = 0;

function getY(el) {
    var t1 = el.getBoundingClientRect();
    return t1.top;
}

function goLeft() {

    let timePassed = 1;
    panel = document.getElementsByClassName('nav_panel')[0];
      let timer = setInterval(function() {
        panel.style.right = timePassed * 5 - 90  + 'px';
        timePassed++;
        if (timePassed > 18) clearInterval(timer);

      }, 20);
}

window.addEventListener('scroll', function() {
    var temp = position;
    if(pageYOffset > 160) position = true;
    else position = false;
    if(position != temp){
        class NavPanel extends React.Component {
        constructor(props) {  
            super(props);
            this.state = { show: false };
        }
        render() {
            this.state.show = (pageYOffset > 160);
            if (this.state.show == false) {
                return null; 
            }
            else {
                return e(
                    'div', 
                    {onClick: () => test(), className: 'nav_panel'},
                    e('div',{onClick: () => window.scrollTo(pageXOffset, 0), className: 'home_panel panel_active'}, 'HOME'),
                    e('div',{onClick: () => document.getElementById("projects").scrollIntoView(),className: 'portf_panel'}, 'PORTFOLIO'),
                    e('div',{onClick: () => document.getElementById("about").scrollIntoView(),className: 'about_panel'}, 'ABOUT US'),
                    e('div',{onClick: () => document.getElementById("contact").scrollIntoView(),className: 'contact_panel'}, 'CONTACT')
                    );
                }
            }
        } 
    domContainer = document.getElementById('nav_panel');
    ReactDOM.render(e(NavPanel), domContainer);
    if(position) goLeft();
    }
    if(position) {
        b1 = document.getElementsByClassName('home_panel')[0];
        b2 = document.getElementsByClassName('portf_panel')[0];
        b3 = document.getElementsByClassName('about_panel')[0];
        b4 = document.getElementsByClassName('contact_panel')[0];
        v1 = document.getElementById('home');
        v2 = document.getElementById('projects');
        v3 = document.getElementById('about');
        v4 = document.getElementById('contact');
        if(1100 <getY(v1) < 900 & getY(v1) > -500) {
            b1.classList.add("panel_active");
        }
        else b1.classList.remove("panel_active");
        if(getY(v2) < 985 & getY(v2) > -500) {
            b2.classList.add("panel_active");
        }
        else b2.classList.remove("panel_active");
        if(getY(v3) < 550 & getY(v3) > -500) {
            b3.classList.add("panel_active");
        }
        else b3.classList.remove("panel_active");
        if(getY(v4) < 1360 & getY(v4) > -500) {
            b4.classList.add("panel_active");
        }
        else b4.classList.remove("panel_active");
    }
});