let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
screen.value = '0';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText== 'C'){
            screenValue = "";
            screen.value = '0';
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}