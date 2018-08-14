// DOM ELEMENTS :
const button = document.querySelector('.click-event');
const focus = document.getElementsByClassName('focus-event');
const key = document.getElementById('key');
const hidden = document.getElementById('hidden');
const input = document.querySelectorAll('.input-event')[0];
const display = document.querySelector('#display');
const xcord = document.querySelector('.x-cord');
const ycord = document.querySelector('.y-cord');
const body = document.getElementsByTagName('body')[0];
const mouse = document.querySelector('.mouse-event');

// EVENT LISTENERS :

// elementSelected.addEventListener('event-type', function() {
//   //do some crap
// })

// CLICK :
// DISPLAY THE HIDDEN TEXT
button.addEventListener('click', function(e) {
  if(hidden.id.length) {
    hidden.id = '';
  }else {
    hidden.id = 'hidden';
  }
})

// FOCUS :
// ADD SOME STYLE TO THE INPUT BOX
function addListener(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('focus', function() {
      arr[i].style.backgroundColor = 'green';
    })
  }

}

addListener(focus)


// KEY-UP/KEY-DOWN :
// TRACK THE KEY
body.addEventListener('keypress', function(e) {
  console.log(e)
  if(e.code == 'Space') {
    display.innerText += ' '
  }else {
    display.innerText += e.key
  }
})

// INPUT :
// FINISH THE SENTENCE



// MOUSE-ENTER/MOUSE-LEAVE :
// DISPLAY THE MOUSE LOCATION

mouse.addEventListener('mousemove', function(e) {
  xcord.innerText = e.x
  ycord.innerText = e.y
})
