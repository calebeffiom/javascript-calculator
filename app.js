let userInput1 = document.getElementById("input1");
let userInput2 = document.getElementById("input2");
var subtract;
var add;
var multiply;
var divide;
var answer;
var answerText;
var answerPara;

function subtraction(){
    subtract = (userInput1.value - userInput2.value);

    if (userInput1.value === "" || userInput2.value === "" ){
        alert("enter a value to subtract");
    }
    else{
        // answerText = document.createTextNode(subtract);
        answerPara = document.getElementById("answer-para");
        // answerPara.appendChild(answerText);
        answerPara.innerHTML = subtract;
        
    }

    
    
    userInput1.value = "";
    userInput2.value = "";
}
    
function addition(){
    add = (Number(userInput1.value) + Number(userInput2.value));

    if (userInput1.value === "" || userInput2.value === "" ){
        alert("enter a value to add");
    }
    else{
        // answerText = document.createTextNode(add);
        answerPara = document.getElementById("answer-para");
        // answerPara.appendChild(answerText);
        answerPara.innerHTML = add;
    }

    userInput1.value = "";
    userInput2.value = "";
}

function multiplication(){
    multiply = (userInput1.value * userInput2.value);

    if (userInput1.value === "" || userInput2.value === "" ){
        alert("enter a value to multiply");
    }
    else{
        // answerText = document.createTextNode(multiply);
        answerPara = document.getElementById("answer-para");
        // answerPara.appendChild(answerText);
        answerPara.innerHTML = multiply;

    }

    userInput1.value = "";
    userInput2.value = "";
}

function division(){
    divide = (userInput1.value / userInput2.value);

    if (userInput1.value === "" || userInput2.value === "" ){
        alert("enter a value to divide");
    }
    else{
        // answerText = document.createTextNode(divide);
        answerPara = document.getElementById("answer-para");
        // answerPara.appendChild(answerText);
        answerPara.innerHTML = divide;
    }

    userInput1.value = "";
    userInput2.value = "";
}

function clearall(){
  answerPara.replaceChildren();   
}