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

// let theme = document.querySelectorAll('theme');
// for(item of theme){
//     item.addEventListener('click',(e)=>{
//         document.getElementsByTagName('body')[0].classList.theme("dark")
//     });
// }

document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark");
});