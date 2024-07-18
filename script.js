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

let metricRadio = document.querySelector("#metric");
let imperialRadio = document.querySelector("#imperial");

// change the unit when imperial or metric is selected
function changeUnit(){
    let heightUnit = document.querySelector("#height-unit");
    let weightUnit = document.querySelector("#weight-unit");
    console.log(heightUnit,weightUnit)

    let metricStatus = metricRadio.checked;
    let imperialStatus = imperialRadio.checked;

    if(metricStatus){
        heightUnit.innerText = "Meters(M)";
        weightUnit.innerText = "Kilograms(Kg)";
    }
    else if(imperialStatus){
        heightUnit.innerText = "Feet(ft)";
        weightUnit.innerText = "Pounds(p)";
    }
    else{
        console.log("unit went wrong...");
    }

}

// add eventlistener to radio buttons


metricRadio.addEventListener("click", changeUnit);
imperialRadio.addEventListener("click", changeUnit);
