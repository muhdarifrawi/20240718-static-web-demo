// querySelector, querySelectorAll
// selecting the text inputs
// let userHeight = parseFloat(document.querySelector("#user-height").value);
// let userWeight = parseFloat(document.querySelector("#user-weight").value);

// function for submission
function userSubmit(){
    let userHeight = parseFloat(document.querySelector("#user-height").value);
    let userWeight = parseFloat(document.querySelector("#user-weight").value);
    
    console.log(userHeight,userWeight);
    let display = document.querySelector("#result");
    display.innerText = "";
    display.innerText += calculateBMI(userHeight,userWeight);
}

// add in function for submission into event listener into submit button
let submitBtn = document.querySelector("#process");
submitBtn.addEventListener("click", userSubmit);

// create function for the BMI calculation
function calculateBMI(height, weight){
    console.log(height, weight)
    let bmi = weight / (height ** 2);
    console.log(bmi);
    return bmi
}