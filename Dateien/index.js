function DateNow() {
  let nowDate = new Date();
  let dateString = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' +
                   nowDate.getDate();

  console.log(dateString);

  document.getElementById('writeDate').innerHTML = dateString;
}

DateNow()



let currentside = 0;

const basenote = document.getElementById('basenote').classList;
const heartnote = document.getElementById('heartnote').classList;
const headnote =  document.getElementById('headnote').classList;
const intensity = document.getElementById('intensität').classList;

const image = document.getElementById('divBox_Image').innerHTML;

let honigCode ='#FFC30B'
let orangeCode = '#D35400'
let pepperMinceCode = '#98FF98'
let winterGreenCode = '#568203'
let bloodOrangeCode = '#D9381E'
let melisseCode = '#99C24D'
let birkeCode = '#D6D6D4'
let weihCode = '#D1B280'
let vanilleCode = '#F3E5AB'

let color1 = 'white';
let color2 = 'white';
let color3 = 'white';

let startPrice = 30;

let priceColor1 = 0;
let priceColor2 = 0;

let priceColor3 = 0;

let buyButton = document.getElementById('homepage_main_finish')

document.getElementById('homepage_main').style.display = 'none'

// let parfumLinearGradient = `linear-gradient(180deg, ${baseNoteColor}, ${headNoteColor}, ${headNoteColor})`

document.getElementById('colorVanille').style.backgroundColor = vanilleCode;             
document.getElementById('colorBirke').style.backgroundColor = birkeCode;             
document.getElementById('colorWeih').style.backgroundColor = weihCode;

function getStarted() {
  document.getElementById('homepage_main').style.display = 'grid'
  document.getElementById('startpage').style.display = 'none'
}

function buttonpressed(index) {
if (index == 'next') {
  console.log('**************************************************')
  console.log('index: ' + index);
  switchToNextStep(currentside);
  
  return
}else if (index == 'prev') {
  console.log('**************************************************')
  console.log('pressed' + currentside)
  switchToPrevStep(currentside); 
  console.log('index: ' + index);
}
}


function currentState(index, state) {



basenote.add('active');
    switch (index) {
    case 1:
      if (currentside == 1) {
        load2ndPart('prev');
      }else{
        load2ndPart(state)
      }
      console.log('case 1:  '+currentside)
        heartnote.remove('active');
        basenote.add('active');
      break;

    case 2:
      if (currentside == 2) {
        load3ndPart('prev');
        load2ndPart('next')
      }else{
        load2ndPart(state)
      }
      console.log('case 2:  '+currentside)
      basenote.remove('active');
      headnote.remove('active');
      heartnote.add('active');
      load3ndPart('prev')
      
      
      break;  
    
    case 3:
      if (currentside == 3) {
        load4ndPart('prev')
        load3ndPart('next')
      }else{
        load3ndPart('prev')
      }
      console.log('case 3:  '+currentside)
      heartnote.remove('active');
      basenote.remove('active');
      intensity.remove('active');
      headnote.add('active');
      // load4ndPart('prev')
      
      
      break;
    
    case 4:
      console.log('case 4:  '+ currentside)
      headnote.remove('active');
      basenote.remove('active');
      intensity.add('active');
      load4ndPart(state)

      loadFinish()
      break;
  
    default:
      break;
  }
}

currentState(currentside) 

function switchToNextStep(index) {
  currentside = index;
  if(currentside < 4){
    currentside = currentside + 1;
    buttonsEnable(currentside);
    console.log('switchToNextStep Now : '+currentside)
  }else if(currentside == 4 ){
    buttonsDisable(currentside);
  }
  currentState(currentside, 'next');
}

function switchToPrevStep(index) {
currentside = index;
  if(currentside > 0){
    currentside = currentside - 1;
    buttonsEnable(currentside);
    console.log('switchToPrevStep Now'+currentside)
  }else if(currentside == 0){
    buttonsDisable(currentside);
  }

  
  currentState(currentside, 'prev');
}

function buttonsDisable(index) {
  currentside = index;

  if (currentside == 4) {
    document.getElementById('button_next').style.cursor = 'not-allowed'
  }

  if(currentside == 0 ){
    document.getElementById('button_prev').style.cursor = 'not-allowed'
  }
}

function buttonsEnable(index) {
currentside = index;

if (currentside < 4) {
  document.getElementById('button_next').style.cursor = ''
}

if(currentside > 0 ){
  document.getElementById('button_prev').style.cursor = ''
}
}

function load2ndPart(state) {
if(state == 'next'){
  console.log('LoadPart2')
  document.getElementById('homepage_main_part2').innerHTML = `
      <div id="part2">
      <h3>Choose your Heartnote:</h3>
                <div class="options">
                  
                  <p>Honig</p>
                  <p>Bitter Orange</p>
                  <p>Pfefferminze</p>
                </div>

                <div class="options">
                  <div onclick="updateColor2(1)" class="circle" id="colorHonig"></div>
                  <div onclick="updateColor2(2)" class="circle" id="colorOrange"></div>
                  <div onclick="updateColor2(3)" class="circle" id="colorMinze"></div>
                </div>
                
              </div>`

  document.getElementById('colorHonig').style.backgroundColor = honigCode;             
  document.getElementById('colorOrange').style.backgroundColor = orangeCode;             
  document.getElementById('colorMinze').style.backgroundColor = pepperMinceCode;             
      
}else if(state == 'prev'){
  document.getElementById('homepage_main_part2').innerHTML = ``
}

}


function load3ndPart(state) {
if(state == 'next'){
  console.log('LoadPart3')
  document.getElementById('homepage_main_part3').innerHTML = `
      <div id="part3">
      <h3>Choose your Headnote:</h3>
                <div class="options">
                  
                  <p>Wintergrün</p>
                  <p>Blutorange</p>
                  <p>Melisse</p>
                </div>

                <div class="options">
                  <div  onclick="updateColor3(1)" class="circle" id="colorwinter"></div>
                  <div  onclick="updateColor3(2)" class="circle" id="colorBlood"></div>
                  <div  onclick="updateColor3(3)" class="circle" id="colorMelisse"></div>
                </div>
                
              </div>`

document.getElementById('colorwinter').style.backgroundColor = winterGreenCode;             
document.getElementById('colorBlood').style.backgroundColor = bloodOrangeCode;             
document.getElementById('colorMelisse').style.backgroundColor = melisseCode;
      
}else if(state == 'prev'){
  document.getElementById('homepage_main_part3').innerHTML = ``
}

}
function load4ndPart(state) {
if (state == 'next') {
  console.log('LoadPart4')
  document.getElementById('homepage_main_part4').innerHTML = `
      <div id="part4">
                <div>
                  <h3>Choose the Intensity:</h3>
                  <input oninput="getIntensity()" type="range" name="intensität" id="range_intensity" min="40" max="100">
                </div>      
              </div>`
      
}else if(state == 'prev'){
  document.getElementById('homepage_main_part4').innerHTML = ``
}

}

function getIntensity() {
let opacityNew = document.getElementById('range_intensity').value / 100;

document.getElementById('divBox_Image').style.opacity = opacityNew;
}

function updateColor1(index) {
  if (index == 1) {
    color1 = vanilleCode;
  }else if(index == 2){
    color1 = birkeCode;
    priceColor1 = 5;
  }else if (index == 3) {
    color1 = weihCode;
    priceColor1 = 10;

  } 
  updateGradient();
}

// Funktion zum Ändern von Farbe 2
function updateColor2(index) {
  if (index == 1) {
    color2 = honigCode;
  }else if(index == 2){
    color2 = orangeCode;
    priceColor2 = 5;
  }else if (index == 3) {
    color2 = pepperMinceCode;
    priceColor2 = 10;
  } 

  console.log(priceColor2)
  updateGradient();
}

// Funktion zum Ändern von Farbe 3
function updateColor3(index) {
  if (index == 1) {
    color3 = winterGreenCode;
  }else if(index == 2){
    color3 = bloodOrangeCode;
    priceColor3 = 5;
  }else if (index == 3) {
    color3 = melisseCode;
    priceColor3 = 10;
  } 
  updateGradient();
}

// Funktion, die den Gradienten aktualisiert
function updateGradient() {
  const gradientBox = document.getElementById('divBox_Image');
  gradientBox.style.background = `linear-gradient(360deg, ${color1}, ${color2}, ${color3})`;
}

function loadFinish() {
  buyButton.innerHTML = `<button onclick="loadEnd()" id="homepage_end">
  Buy Parfum
  </button>`
}

function loadEnd() {
  price = startPrice + priceColor1 + priceColor2 + priceColor3;
  document.getElementById('homepage_main').style.display = 'none'

  document.getElementById('end').innerHTML = `<div id="EndScreen">
  <img id="end_image" src="../Fotos/order.png" alt="" >
  <h2>Ihre Bestellung im Wert von ${price}€ wurde abgeschickt.</h2>
  <h3>Wir werden Ihre Bestellung schnellstmöglich bearbeiten.</h3>
  </div>`
  
}
