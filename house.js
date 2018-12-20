// elements from html 
let guessBox = document.querySelector("#guess")
let resultText = document.querySelector("#resultText")
let resultBox = document.querySelector("#resultBox")
let submit = document.querySelector("#submit")
let easy = document.querySelector("#easy")
let medium = document.querySelector("#medium")
let hard = document.querySelector("#hard")
// testing 
console.log (easy)


// this variable controls the difficulty itsdefault value is easy.
let difficulty = "easy"

// event listeners code
submit.addEventListener('click', (event) => {
  console.log(guessBox.value)
  let numGuess = parseInt(guessBox.value)
  //Now that you have a number, run the corresponding function based on the user's selected difficulty
  if (difficulty == "easy") {
    guess1(numGuess)
  } else if (difficulty == "medium") {
    guess2(numGuess)
  } else if (difficulty == "hard") {
    guess3(numGuess) 
  }

})
easy.addEventListener("click", (event) => {
  console.log("easy button clicked")
  console.log (randomNum1)
  difficulty = "easy"
  easy.classList.add("active")
  hard.classList.remove("active")
  medium.classList.remove("active")
})
medium.addEventListener("click", (event) => {
  difficulty = "medium"
  console.log("medium button clicked")
   console.log (randomNum2)
   medium.classList.add("active")
   hard.classList.remove("active")
   easy.classList.remove("active")
})
hard.addEventListener("click", (event) =>{
  difficulty = "hard"
  console.log("hard button clicked")
   console.log (randomNum3)
   hard.classList.add("active")
   easy.classList.remove("active")
   medium.classList.remove("active")
   
   
})

// function used to compair guess to secret number 
function guess1(someNum1) {
  console.log("you guessed " + someNum1)
  if (someNum1 == randomNum1) {
    console.log("Good Job, You're Correct!!")
    resultText.innerHTML = "Good Job, You're Correct!!"
  }
  if(someNum1 > randomNum1) {
    console.log("Too High")
  resultText.innerHTML = "Too High"
  }
  if(someNum1 < randomNum1) {
    console.log("Too Low")
    resultText.innerHTML = "Too Low"
  }
}

// generates random number 
let randomNum1 = Math.floor(Math.random()* 10) + 1
console.log(randomNum1)


// medium difficulty
function guess2(someNum2) {
  console.log("you guessed " + someNum2)
  if (someNum2 == randomNum2) {
    console.log("Good Job, You're Correct!!")
    resultText.innerHTML = "Good Job, You're Correct!!"
  }
  if(someNum2 > randomNum2) {
    console.log("Too High")
  resultText.innerHTML = "Too High"
  }
  if(someNum2 < randomNum2) {
    console.log("Too Low")
    resultText.innerHTML = "Too Low"
  }
}


let randomNum2 = Math.floor(Math.random()* 50) + 1
console.log(randomNum2)

function guess3(someNum3) {
  console.log("you guessed " + someNum3)
  if (someNum3 == randomNum3) {
    console.log("Good Job, You're Correct!!")
    resultText.innerHTML = "Good Job, You're Correct!!"
  }
  if(someNum3 > randomNum3) {
    console.log("Too High")
  resultText.innerHTML = "Too High"
  }
  if(someNum3 < randomNum3) {
    console.log("Too Low")
    resultText.innerHTML = "Too Low"
  }
}
let randomNum3 = Math.floor(Math.random()* 100) + 1
console.log(randomNum3)

//1. use query selector to store submit button in variable or constant. 2. add click event listener. 3. when click is pressed have response console.log button is pressed. 4.
// Variable at top of code that starts set to easy