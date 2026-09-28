const rockImg=document.createElement("img");
rockImg.src="./images/rock.png";

const paperImg=document.createElement("img");
paperImg.src="./images/paper.png";

const scissorsImg=document.createElement("img");
scissorsImg.src="./images/scissors1.png";

const scoreBoard=document.querySelector(".score-result");

const buttons=document.querySelectorAll("button");

const userScore=document.querySelector(".user-score");
const compScore=document.querySelector(".computer-score");

const scoreResult=document.querySelector(".finalWinner");









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


function getHumanChoice(e){
    return e.currentTarget.id;
}


function playRound(compChoice,humanChoice){
   

   if(humanChoice==="rock"){
        if(compChoice==="Paper"){

            scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/rock.png"> Computer Choice: <img src="./images/paper.png"> </p> <p>You lose!</p> `;

            return "lose";
        }

        else if(compChoice==="Scissors"){
            scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/rock.png"> Computer Choice: <img src="./images/scissors1.png"> </p> <p>You win!</p> `;
            return "win";
        }else{
           scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/rock.png"> Computer Choice: <img src="./images/rock.png"> </p> <p>Draw</p> `;
            return "draw";
        }
   }else if(humanChoice==="paper"){
        if (compChoice==="Scissors"){
            scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/paper.png"> Computer Choice: <img src="./images/scissors1.png"> </p> <p>You lose!</p> `;
            return "lose";
        }
        else if(compChoice==="Rock"){
            scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/paper.png"> Computer Choice: <img src="./images/rock.png"> </p> <p>You win!</p> `;
            return "win";
        }else{
           scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/paper.png"> Computer Choice: <img src="./images/paper.png"> </p> <p>Draw</p> `;
            return "draw";
        }

   }
   
   else if (humanChoice==="scissors") {
        if(compChoice==="Rock"){
            scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/scissors1.png"> Computer Choice: <img src="./images/rock.png"> </p> <p>You lose!</p> `;
            return "lose";
        }
        else if(compChoice==="Paper"){
            scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/scissors1.png"> Computer Choice: <img src="./images/paper.png"> </p> <p>You win!</p> `;
            return "win";

        }else {
           scoreBoard.innerHTML=`<p>Your Choice: <img src="./images/scissors1.png"> Computer Choice: <img src="./images/scissors1.png"> </p> <p>Draw</p> `;
            return "draw";
        }
    }
    
}
let counter=0;
let humanScore=0;
let computerScore=0;




buttons.forEach(
    button=> button.addEventListener("click",(e)=>{
        const humanValue= getHumanChoice(e);
        const compValue=getComputerChoice();


        
        let result=playRound(compValue,humanValue);
        counter++;
        console.log(result);
        
        if(result==="win"){
            humanScore++
        }else if(result==="lose"){
            computerScore++
        }

        userScore.textContent=`${humanScore}`;
        compScore.textContent=`${computerScore}`;

     
        if(counter===5){
            if(computerScore>humanScore){
                scoreResult.textContent="YOU LOSE BEST OF FIVE!";
            }
            else if(computerScore<humanScore){
               scoreResult.textContent="YOU WIN BEST OF FIVE!";
            }
            else{
                            
                scoreResult.textContent="DRAW";
               }

        setTimeout(()=>{
            counter =0;
            humanScore=0;
            computerScore=0;
            userScore.textContent=`${humanScore}`;
            compScore.textContent=`${computerScore}`;
            scoreBoard.textContent="";
            scoreResult.textContent="";
        },2000)}
    }
                
    
    )
)


/*
const scoreBoard=document.querySelector("div");

const contNAR=document.querySelector(".body-container");


contNAR.appendChild(scoreResult);

*/
