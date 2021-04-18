
let form = document.getElementById('form');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
  getSelectedText();
  getMaxNumber();
  myFactOrRumor()
  getFactOrRumor()

});

function checkInputs() {
  let number1Value = number1.value.trim();
	let number2Value = number2.value.trim();
	let number3Value = number3.value.trim();

	if(number1Value === '') {
		setErrorFor(number1, 'Número em branco');
	} else {
		setSuccessFor(number1);
	}

	if(number2Value === '') {
		setErrorFor(number2, 'Número em branco');
	} else {
		setSuccessFor(number2);
	}
	
	if(number3Value === '') {
		setErrorFor(number3, 'Número em branco');
	} else {
		setSuccessFor(number3);
	}
}
//  Error messages		
function setErrorFor(input, message) {
	let formControl = input.parentElement;
	let small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	let formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// sort an array

function getMaxNumber() {
  let array = []
  array.push(number1.value, number2.value, number3.value)
  
  let max = array.reduce(function(a, b) {
    return Math.max(a, b);
  });
  let result = document.getElementById('chosenNumberId');
  result.value = max
}

function myFactOrRumor() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function(response) {
    
      if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);         
          randomSentence(data);
      }
  }
  xmlhttp.open("GET", "factoOrRumor.json", true);
  xmlhttp.send();
}

function randomSentence(data) {
  let randomNumber = Math.floor(Math.random() * 11);
  const randomized = data[randomNumber];
  const result = randomized

   frase.value = result.frase
  
}

function getSelectedText(){
  var e = document.getElementById("fact");
  var result = e.options[e.selectedIndex].text;
  
  document.getElementById("result").innerHTML = result;
  // myFactOrRumor()
}

function getFactOrRumor() {
  
    let number1Value = number1.value.trim();
    let number2Value = number2.value.trim();
    let number3Value = number3.value.trim();
  
    if(number1Value === ''
      ||number2value ==='' 
      ||number3Value === '') {
        document.getElementById("result").innerHTML = 'Boato';
    } else {
      document.getElementById("result").innerHTML = 'Fato';
    }
}
