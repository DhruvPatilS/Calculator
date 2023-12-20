const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const operators=["+","-","*","/","%","="];
let output="";
const calculate=(buttonValue)=>
{
    if(buttonValue==="="&&output!=="")
    {
        output=eval(output.replace("%","/100"));
    }
    else if(buttonValue==="AC")
    {
        output="";
    }
    else if(buttonValue==="DEL"){
        output=output.toString().slice(0,-1);
    }
    else{
        if(output===""&& operators.includes(buttonValue))
        return;
    output=output+buttonValue;
    }
display.value=output;
}
buttons.forEach((button)=>
    {
        button.addEventListener("click",(event)=>calculate(event.target.dataset.value));
    });