
const display = document.getElementById("display");



function clearDisplay(){
  //console.log(display.value[display.value.length-1]);
    display.value = "";
}

function deleteLast(){
    if(display.value=="Error"){
        display.value ="";
    }
    display.value = display.value.slice(0, -1);
}

function appendValue(value){
    if(display.value=="Error"){
        display.value ="";
    }
    

    
    let op = /[+\-*/%/]/;
    if(!op.test(display.value[display.value.length-1]) ){
        display.value += value;
    }
    else if(!op.test(value)){
        display.value += value;
    }
    
    
}

function calculate(){
    try{

        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}