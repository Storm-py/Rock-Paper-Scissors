function userInput() {
    let input;
    while (true) {
        input = prompt('Enter the Number 0, 1, or 2');
        input = parseInt(input, 10);
        if (input === 0 || input === 1 || input === 2) {
            return input;
        } else {
            alert('Invalid input, please enter 0, 1, or 2.');
        }
    }
}
function compInput(){
   let compt= Math.floor(Math.random()*2)
   return compt
}
function totalProcess(user,comp){
    if(user<=2){
    if(user==comp){
        console.log("this is a draw")
    }
    else if(user==0 && comp==1){
        console.log('Computer won')
    }
    else if(user==0 && comp==2){
        console.log('You won')
    }
    else if(user==1 && comp==0){
        console.log('You won')
    }
    else if(user==1 && comp==2){
        console.log('computer won')
    }
    else if(user==2 || comp==0){
        console.log('computer won')
    }
    else if(user==2 || comp==1){
        console.log('You won')
    }
}

}

const userInputt=userInput();
console.log("You choose this :",userInputt)
const compInputt=compInput();
console.log("Computer choose this :",compInputt)
totalProcess(userInputt,compInputt)

