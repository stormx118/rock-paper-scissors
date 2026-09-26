const buttons=document.querySelectorAll("button");
const scoreBoard=document.querySelector("div");
const scoreResult=document.createElement("p");
const contNAR=document.querySelector("body");


contNAR.appendChild(scoreResult);

let counter=0;
let humanScore=0;
let computerScore=0;



function getComputerChoice(){

let compChoice = Math.floor(Math.random() *3 + 1);
let result;
if(compChoice===1){
    result= "Rock";
}
else if(compChoice===2){
    result= "Scissors";
}
else{
    result="Paper";
}
return result;
}

//To get human choice
//Declare the getHumanChoice function
//Create a new variable  called humanChoice
//Prompt the user for the input and store it in humanChoice variable

function getHumanChoice(e){
    return e.target.className;
}



function playRound(compChoice,humanChoice){
   

   if(humanChoice==="rock"){
        if(compChoice==="Paper"){
            scoreBoard.textContent=`Your Choice: Rock. \n Computer Choice: Scissors.\nYou lose! Paper beats Rock\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "lose";
        }

        else if(compChoice==="Scissors"){
            scoreBoard.textContent=`Your Choice: Rock. \n Computer Choice: Scissors.\nYou win! Rock beats Scissors\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "win";
        }else{
            scoreBoard.textContent=`Your Choice: Rock. \n Computer Choice: Rock.\nYou draw!\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "draw";
        }
   }else if(humanChoice==="paper"){
        if (compChoice==="Scissors"){
            scoreBoard.textContent=`Your Choice: Paper. \n Computer Choice: Scissors.\nYou lose! Scissors beats Paper\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "lose";
        }
        else if(compChoice==="Rock"){
            scoreBoard.textContent=`Your Choice: Paper. \n Computer Choice: Rock.\nYou win! Paper beats Rock\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "win";
        }else{
            scoreBoard.textContent=`Your Choice: Paper. \n Computer Choice: Paper.\nYou draw!\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "draw";
        }

   }
   
   else if (humanChoice==="scissors") {
        if(compChoice==="Rock"){
            scoreBoard.textContent=`Your Choice: Scissors. \n Computer Choice: Rock.\nYou lose! Rock beats Scissors.\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "lose";
        }
        else if(compChoice==="Paper"){
            scoreBoard.textContent= `Your Choice: Scissors. \n Computer Choice: Paper. \nYou win! Scissors beats Paper.\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "win";

        }else {
            scoreBoard.textContent=`Your Choice: Scissors. \n Computer Choice: Scissors.\nYou draw!\n`;
            scoreBoard.style.whiteSpace="pre-line";
            return "draw";
        }
    }
    
}
buttons.forEach(
    button=> button.addEventListener("click",(e)=>{
        const humanChoice= getHumanChoice(e);
        const compChoice=getComputerChoice();

        
        let result=playRound(compChoice,humanChoice);;
        counter++;
        
        
        if(result==="win"){
            humanScore++
        }else if(result==="lose"){
            computerScore++
        }
     
        if(counter===5){
            if(computerScore>humanScore){
                scoreResult.textContent=`Computer Score: ${computerScore}.\nYour Score: ${humanScore}.\n YOU LOSE`;
                scoreResult.style.whiteSpace="pre-line";}
            else if(computerScore<humanScore){
                scoreResult.textContent=`Computer Score: ${computerScore}.\nYour Score: ${humanScore}.\n YOU WIN`;
                scoreResult.style.whiteSpace="pre-line";
            }
            else{
                            
                scoreResult.textContent=`Computer Score: ${computerScore}.\nYour Score: ${humanScore}.\n YOU DRAW`;
                scoreResult.style.whiteSpace="pre-line";}

        setTimeout(()=>{
            counter =0;
            humanScore=0;
            computerScore=0;
            scoreResult.textContent="";
        },2000)}
    }
                
    
    )
)


