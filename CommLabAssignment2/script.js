// handling panels order based on user interactivity

let option1 = false;
let option2 = false;
let option3 = false;
let firstCheck = false;

let slide6 = document.getElementById("slide6");
let slide7 = document.getElementById("slide7");
let slide8 = document.getElementById("slide8");
let slide9 = document.getElementById("slide9");
let slide10 = document.getElementById("slide10");
let slide11 = document.getElementById("slide11");
let slide12 = document.getElementById("slide12");
const nextBtn = document.querySelector('.next');

    let button1 = document.createElement("button");
    button1.innerHTML = "Choose me";
    button1.className = "choose-me";
    let button2 = document.createElement("button");
    button2.innerHTML = "Choose me";
    button2.className = "choose-me";
    button2.classList.add("choose-me2");
    let button3 = document.createElement("button");
    button3.innerHTML = "Choose me";
    button3.className = "choose-me";
    button3.classList.add("choose-me3");

function choice1(choice){

  if(choice == 1 && !option1){
        slide6.src = './images/ipad1.png';
        slide7.src = './images/ipad2.png';
        slide8.src = './images/8.png';
        slide8.parentNode.insertBefore(button2, slide8);
        slide8.parentNode.insertBefore(button3, slide8);
        option1 = true;
    }
    if(choice == 2 && !option2){
        slide6.src = './images/notebook1.png';
        slide7.src = './images/10.png';
        slide7.parentNode.insertBefore(button1, slide7);
        slide7.parentNode.insertBefore(button3, slide7);
        option2 = true;
    }
    if(choice == 3 && !option3){
        slide6.src = './images/iphone1.png';
        slide7.src = './images/iphone2.png';
        slide8.src = './images/phoneX.png';
        slide8.parentNode.insertBefore(button1, slide8);
        slide8.parentNode.insertBefore(button2, slide8);
        option3 = true;
    }

    button1.onclick = function() {
          choice2(1);
  };
  button2.onclick = function() {
          choice2(2);
  };
  button3.onclick = function() {
          choice2(3);
  };
    nextBtn.click();
}

function choice2(choice){

  if(!firstCheck){
    if(choice == 1){
    option1 = true;
    if(option2){
        slide8.src = './images/ipad1.png';
        slide9.src = './images/ipad2.png';
        slide10.src = './images/ipadandnoteX.png';
        slide10.parentNode.insertBefore(button3, slide10);
    }
    if(option3){
        slide9.src = './images/ipad1.png';
        slide10.src = './images/ipad2.png';
        slide11.src = './images/ipadandiphoneX.png';
        slide11.parentNode.insertBefore(button2, slide11);
    }
  }

  if(choice == 2){
    option2 = true;
    if(option1){
        slide9.src = './images/notebook1.png';
        slide10.src = './images/ipadandnoteX.png';
        slide10.parentNode.insertBefore(button3, slide10);
    }
    if(option3){
      slide9.src = './images/notebook1.png';
      slide10.src = './images/noteandphoneX.png';
      slide10.parentNode.insertBefore(button1, slide10);
    }
  }

  if(choice == 3){
    option3 = true;
    if(option1){
        slide9.src = './images/iphone1.png';
        slide10.src = './images/iphone2.png';
        slide11.src = './images/ipadandiphoneX.png';
        slide11.parentNode.insertBefore(button2, slide11);
    }
    if(option2){
        slide8.src = './images/iphone1.png';
        slide9.src = './images/iphone2.png';
        slide10.src = './images/noteandphoneX.png';
        slide10.parentNode.insertBefore(button1, slide10);
    }
  }
  }
  firstCheck = true;
  lastChoice();
  nextBtn.click();
}


function lastChoice(){
  if(option1 && option2){
      slide11.src = './images/iphone1.png';
      slide12.src = './images/iphone2.png';
      button1.remove();
      button2.remove();
  }else if(option1 && option3){
      slide12.src = './images/notebook1.png';
      button1.remove();
      button3.remove();
  }else if(option2 && option3){
    slide11.src = './images/ipad1.png';
    slide12.src = './images/ipad2.png';
    button2.remove();
    button3.remove();
  }
}


$(document).ready(function(){

    var totop = $('.topBtn');
    
    $(window).scroll(function() {
        var WinOffset = $(window).scrollTop();
        var scrollPercent = 100 * WinOffset / ($(document).height() - $(window).height());
        $('.progress').css({ height: scrollPercent + '%' });
        if (WinOffset > 100) {
            totop.addClass('active');
        } else {
            totop.removeClass('active');
        }
    });    

    var minSpeed 		= 1000;
    var maxSpeed		= 1500;
    totop.off().on('click', function(e) {
        e.preventDefault();
        var speed		= ($(window).scrollTop()-$(window).height())/2;
        if(speed < minSpeed){speed = minSpeed;}
        if(speed > maxSpeed){speed = maxSpeed;}
        $("html, body").animate({ scrollTop: 0 }, speed);
        return false;
    });

    // gallery animation
    const previousBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')

    const slides = document.querySelector('.slider-slides')
    const slidesNumber = slides.children.length

    let currentSlide = 0

    function updateSlider(){
    const slideWidth = slides.clientWidth
    const offset = -currentSlide * slideWidth
    
    slides.setAttribute('style', `transform: translate(${offset}px)`)
    }

    // previousBtn.addEventListener('click', () => {
    // --currentSlide
    // if (currentSlide < 0) currentSlide = slidesNumber - 1
    
    // updateSlider()
    // })

    nextBtn.addEventListener('click', () => {
    ++currentSlide
    if (currentSlide >= slidesNumber) currentSlide = 0
    
    updateSlider()
    })


});
  