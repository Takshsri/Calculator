

const display=document.getElementById("display")
function appendDisplay(input){
    const lastchar=display.value.slice(-1);
    if(['+','-','*','/','^'].includes(lastchar) && ['+','-','*','/','^'].includes(input)){
        return;
    }
    display.value+=input;
}

function calculate(){
    try{
        if(display.value.includes('log')){
            const num=parseFloat(display.value.replace('log',''));
            display.value=Math.log10(num);
        }
        else if(display.value.includes('^')){
            const power=display.value.split('^');
            display.value=Math.pow(parseFloat(power[0]),parseFloat(power[1]));
        }
        else{
        display.value=eval(display.value);
        }
    }
    catch(error){
    display.value="Error";
    setTimeout( ()=> Clear(),1000); // To Clear the Error and resets to Previous Stage 
}
}

function Clear(){
    display.value="";
}