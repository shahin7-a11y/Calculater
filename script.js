let display = document.getElementById("display");

function appendvalue(value) {
    display.value += value;
    console.log(value,"valueeeeeeee")
}
function cleardisplay(){
    display.value ="";
}

function deletechar(){
    display.value =display.value.slice(0,-1);
}

function calculate(){
    try {
         display.value = eval(display.value);
    } catch {
        display.value = "Error";
        
    }
}