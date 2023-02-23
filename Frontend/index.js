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


let data=[]
let show_all_templates=0;

// getting the data on load

window.addEventListener('load',async ()=>{
    let fetchedProducts=await fetch('https://636a23c5b10125b78fd19a2e.mockapi.io/products', {
        method: 'GET',
        headers: {
            'content-Type': 'application/json'
        }
    })
    if(fetchedProducts.ok){
        let res=await fetchedProducts.json()
        data=[...res]
        // console.log(res)
        // console.log(res.length)
        renderData(data)

        show_all_templates=res.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`

        
    }
})

// rendering the data to the DOM

function renderData(data){
    let renderto= document.querySelector('#right-container');

    let newData=data.map((elem)=>{
        return `
        <div style="background-image: url(${elem.image});" class="child-box">
        <p>${elem.title}</p>
        </div>
        `
    })
    renderto.innerHTML=newData.join('');
}

// click function on left container- checkbox

let a=document.querySelectorAll('.checkbox')

for(let select of a){
    select.addEventListener('click', function(event){
        document.querySelector('#left-container>div:nth-child(2)>input').value=null;
        
        // console.log(event)
        let clicked=event.target.defaultValue
        let renderto= document.querySelector('#right-container');
        renderto.innerHTML=null

        let filteredData=data.filter((elem)=>{
            return elem.category==clicked
        })
        renderData(filteredData)
        // renderto.innerHTML=filteredData.join('');

        show_all_templates=filteredData.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
    })
}

document.querySelector('#left-container>div:nth-child(2)>input').addEventListener('input',search);


// search functionality

function search(){
    unclick()
    let input=document.querySelector('#left-container>div:nth-child(2)>input').value;
    let newData=data.filter((element)=>{
        let entrered=element.title.toLowerCase().includes(input.toLowerCase());
        if(input){
            return entrered;
        }
        else{
            console.log('Nothing to search')
        }
    })
    if(newData.length==0){
        renderData(data)
        show_all_templates=data.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
    }
    else{
        renderData(newData)
        show_all_templates=newData.length
        document.querySelector('#show-all-templates').innerHTML=`Showing <span id="show">${show_all_templates}</span> templates`
    }

}


// unclick function on checkbox

function unclick(){
    let a=document.querySelectorAll('#left-container-labels');
    let n=a[0].children.length

    for(let i=0;i<n;i++){
        a[0].children[i].children[0].checked=false
    }
}


