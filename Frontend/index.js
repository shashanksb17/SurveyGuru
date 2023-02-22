//===============================================================================================

// type-writting js in landing page

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//===============================================================================================

let employees = document.querySelector("#btn-employees");
let customer = document.querySelector("#btn-customer");
let market = document.querySelector("#btn-market");
let other = document.querySelector("#btn-other");

employees.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/2-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/2-5.png" alt="">
            </div>
        `
})

customer.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/3-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/3-5.png" alt="">
            </div>
        `
})

market.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/4-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/4-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/4-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/4-5.png" alt="">
            </div>`
})

other.addEventListener("click", (event) => {
    let redndering_div = document.querySelector("#grid_container");
    redndering_div.innerHTML = "";
    redndering_div.innerHTML = `
            <div class="first">
                <img src="./images/Menu Images/5-1.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-2.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-3.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-4.png" alt="">
            </div>
            <div>
                <img src="./images/Menu Images/5-5.png" alt="">
            </div>`
})

