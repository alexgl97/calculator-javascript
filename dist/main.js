let display = document.querySelector('.display');
//setting object = selecting the element through a class from the document object using a method  query
let buttons = Array.from(document.querySelectorAll('.buttons'));
// transform elements into an array 

buttons.map( button => {
    //from the array buttons map through all and for every button...
    button.addEventListener('click', (e) => {
        //...for every button add an event listener onclick 
        // using the event (e) to target the options available for it 
        switch(e.target.innerText){//using switch//to influence the result shown on display
            case 'AC'://this case clears the display
                display.innerText = '';//setting the display to an empty string
                break;//break statement
            case '='://equal sign
                try{//trying to  eval the result
                    display.innerText = eval(display.innerText);
                } catch {//else show error
                    display.innerText = "Error"
                }
                break;
            case 'C'://delete the last caracther entered
                if (display.innerText){//if statement//target the display text
                    display.innerText = display.innerText.slice(0, -1);//cut of the last num added to the display
                }
                break;
            default://this display the items(array) on the display object using e.target
                display.innerText += e.target.innerText;
        }
    });
});

