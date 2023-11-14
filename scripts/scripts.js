///DOM removal do it locally bruhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var clicked = false

function wiper() { 
    var divElements = document.getElementsByTagName('div');

    for (var i = 0; i < divElements.length; i++) {
      divElements[i].innerHTML = '';
    }
    var divElements2 = document.getElementsByTagName('span');

    for (var i = 0; i < divElements2.length; i++) {
      divElements2[i].innerHTML = '';
    }

    var brTags = document.querySelectorAll('br');
    brTags.forEach(function (brTag) {
        brTag.parentNode.removeChild(brTag);
    })

    document.body.style.backgroundColor = '#0079d8';
  ///SO PLAN IS: make face wink lol
    document.body.innerHTML += '<div class = "BSOD" id = "sad">:(</div><br>' 
    document.body.innerHTML += 
    '<div class = "BSOD" id = "BSOD_text">Your PC has run into a problem and needs to restart as soon as we are finished collecting some error info</div>'


    console.log('lmao')
    
}

async function addon() {
  if (clicked == false){
    clicked = true
    for (let i = 0; i < 5; i++) {
        document.body.innerHTML += '<br><div>...</div>';
        await sleep(1000);
    }
    wiper()
  }}

async function wipe() {
  btn = document.querySelector('button')
  btn.classList.toggle('button-28-loading')
  
  addon()
}

