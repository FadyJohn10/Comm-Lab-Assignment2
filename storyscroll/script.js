
// An array of stories as strings
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

// Add scroll event for the whole HTLM document and set changeText function as callback
document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){
  // Uncomment line below to see scrollY position change
  // console.log(window.scrollY);

  // pos saves current scrollY position
  let pos = window.scrollY;
  // width saves current web page width
  let width = window.innerWidth;
  // height saves current web page height
  let height = window.innerHeight;
  // Calculate which section the user has scrolled to
  // parseInt() function used to ignore decimals
  let sectionNum = parseInt(pos / height);

  // Set the text of cat-text element depending on which section the user has currently scrolled to
  catText.innerHTML = stories[sectionNum];
  cat.src = URLs[sectionNum]
  // Map vertical scroll position to the horizontal position of the cat
  catDiv.style.left = pos / (height * 6) * width + 'px';

  // Fix color of navigation button
  // Set all button color to white
  for(let i = 0; i < navButtons.length; i++){
    navButtons[i].style.backgroundColor = 'white';
  }

  // Set color of current section button to black
  navButtons[sectionNum].style.backgroundColor = 'black';
}