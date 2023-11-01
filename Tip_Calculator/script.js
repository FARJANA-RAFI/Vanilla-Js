const btnEL = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalEl = document.getElementById("total");


// this function is for the calculation of tip percentage and bill.
// tofixed is a method which allows to have fixed digit after decimal sign. 
function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100); 
    totalEl.innerHTML = totalValue.toFixed(2);
}

// there's two way. either add functionalities for the button inside this function or simply call back the function we created which is calculateTotal().
//   
btnEL.addEventListener("click", calculateTotal)