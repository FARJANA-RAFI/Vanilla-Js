// declaring the element
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// added eventlistener for each button
// initialize from 0, goes until 16 as we have 17 button which refers to the button length, and then iterates 16 times
// adding condition for c, operator, number, equal buttons.
for(let i = 0; i< buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue ==="C"){
            clearResult();
        }else if(buttonValue === "="){
            calculateResult();
        }else if(buttonValue ==="✖"){
            eraseLastValue(buttonValue);
        }else{
            appendValue(buttonValue);
        }
    });
}

// to clear the input box
function clearResult(){
    inputFieldEl.value = "";
}
// to calculate 
// eval is a function which evaluate the string.this function is a code itself.
function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}
// to display whatever number and operator buttons are pressed, as well as the result.
// '+'has been used to keep the previous values on the display as we press different values of buttons.   
function appendValue(buttonValue){
    // inputFieldEl.value = inputFieldEl + buttonValue;
    inputFieldEl.value += buttonValue; 
}


// function eraseLastValue(buttonValue){
//     inputFieldEl.value = buttonValue.length.slice(0, -1);
// }
