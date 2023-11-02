const btn = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history")

// initialized the variable. this is for the comment or statement tending to get based on dice-result.
let historyList = [];

// counted the dice result from 1 to 6;
// based on dice number, gonna get the dice-face.
function rollDice(){
        const diceResult = Math.floor(Math.random()* 6) + 1;
        const diceFace = getDiceFace(diceResult); 
        dice.innerHTML = diceFace;
        historyList.push(diceResult);
        diceHistory()

    }

// generated this function for dice-roll-based-result.
// at first history will be empty
// created a variable listItem where created li element.
// this listItem will change dynamically.
// we stored the dice-result into history-list array by using push() 
function diceHistory(){
    rollHistoryEl.innerHTML = "";
    for(let i = 0; i<historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
        rollHistoryEl.appendChild(listItem);
    }
}

// to get the dice face randomly according to dice number  
function getDiceFace(diceResult){
    switch(diceResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;" ;  
            default:
                return "";
    }
}

// triggered the button for as we click it so that the dice will rotate.
// created a class of animation and add the class to the button.
// remove the class in settimeout function so that it move for each click after 1s= 1000ms.
btn.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() =>{
        dice.classList.remove("roll-animation");

        rollDice();
    }, 1000);
}); 