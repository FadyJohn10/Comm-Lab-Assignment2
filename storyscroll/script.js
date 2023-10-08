
let stories = [
  'Nebula',
  'Protostar',
  'Main sequence star',
  'Red giant',
  'Supernova explosion',
  'Supernova explosion'
];

let URLs = [
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/5.png'
]

let catDiv = document.getElementById('moving-div');
let catText = document.getElementById('scrolling-text');
let cat = document.getElementById('scrolling-img');
let navButtons = document.getElementsByClassName('nav-btn');

document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){
  let pos = window.scrollY;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let sectionNum = parseInt(pos / height);

  catText.innerHTML = stories[sectionNum];
  cat.src = URLs[sectionNum]
  catDiv.style.left = pos / (height * 6) * width + 'px';

  for(let i = 0; i < navButtons.length; i++){
    navButtons[i].style.backgroundColor = 'white';
  }

  navButtons[sectionNum].style.backgroundColor = 'black';
}
