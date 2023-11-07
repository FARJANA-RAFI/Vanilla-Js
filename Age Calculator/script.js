// declared all the element which are needed.
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// at first, from the input get the value.
// back tag is used when it's necessary to change contents dynamically. as the paragraph text will change according to the calculated age, added back tag.
function calculateAge(){
        const birthdayValue = birthdayEl.value;
        if(birthdayValue === ""){
            alert("Please enter your birthday");
        }else{
            const age = getAge(birthdayValue);
            resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
        }
}
// calculated the age here
// getFullYear and getMonth are the function which allow to get full month and year.
// inside the if-else condition, stated that, if month is less than 0 or equal to 0 and the current date is less than birthday date, then the age will decrease.
function getAge(birthdayValue){
        const currentDate = new Date();
        const birthdayDate = new Date(birthdayValue)

        let age = currentDate.getFullYear() - birthdayDate.getFullYear();
        let month =  currentDate.getMonth() - birthdayDate.getMonth();

        if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
            age--;
        }
        return age;
}

// triggered the element and added eventlistener method to it in order occur the event.
// declare the function init.
btnEl.addEventListener("click", calculateAge);