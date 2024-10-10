const display = document.getElementById("display");

function appendToDisplay(input){
    display.value +=input
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

function clearLast(){
    display.value = display.value.slice(0, -1)
}

function toggleSign() {
    if (display.value.charAt(0) === '-') {
        display.value = display.value.substring(1); 
    } else {
        display.value = '-' + display.value; 
    }
}
