// Opdracht 1: Een click event vastmaken aan een button

const myButton = document.querySelector("#mybutton");

myButton.addEventListener("click", function () {
  alert("Button clicked!");
});

// Opdracht 2: geef body andere background met click op een tweede button

const body = document.querySelector("body");
const myButton2 = document.querySelector("#mybutton2");

const changeColor = () => {
  body.classList.add("red-background");
};

// myButton2.addEventListener("click", changeColor);


// Opdracht 3: maak er nu een toggle van

const toggleColor = () => {
  body.classList.toggle("red-background");
};

myButton2.addEventListener("click", toggleColor);
