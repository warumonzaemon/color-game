/* Constant and variables for the dice */
const diceColors = ['yellow','white','pink','green','red','blue']
let rollDice = document.getElementById("roll");
let diceColor1 = document.getElementById("color1")
let diceColor2 = document.getElementById("color2")
let diceColor3 = document.getElementById("color3")
let colorRolled1;
let colorRolled2;
let colorRolled3;
let result =[];

/* Profit variables */
let profit1 = +document.querySelector("#player1 .profit").textContent;
let profit2 = +document.querySelector("#player2 .profit").textContent;
let profit3 = +document.querySelector("#player3 .profit").textContent;
let profit4 = +document.querySelector("#player4 .profit").textContent;
let profit5 = +document.querySelector("#player5 .profit").textContent;
let profit6 = +document.querySelector("#player6 .profit").textContent;
let profit7 = +document.querySelector("#player7 .profit").textContent;
let profit8 = +document.querySelector("#player8 .profit").textContent;
let profit9 = +document.querySelector("#player9 .profit").textContent;
let profit10 = +document.querySelector("#player10 .profit").textContent;
let hostProfit = +document.getElementById("hostProfit").textContent;
console.log(hostProfit);

/* Bet arrays */
const yBet = [];
const wBet = [];
const pBet = [];
const gBet = [];
const rBet = [];
const bBet = [];
    
/* function to submit the bets */
function submitBet() {
    for (let i = 0; i < 10; i++){
        /* submit bets for yellow color */
        yBet[i]  =  +document.querySelector(`#player${i+1} .yellowBet`).value;

        /* this statement makes the yellow bets with negative value to 0,
        otherwise submit the value as it is*/
        if (yBet[i] <=0 ) {
            yBet[i] = 0
            document.querySelector(`#player${i+1} .color-yellow`).textContent = 0;
        } else {
            document.querySelector(`#player${i+1} .color-yellow`).textContent = yBet[i];
        }
    }

    for (let i = 0; i < 10; i++){       
        /* submit bets for white color */
        wBet[i]  =  +document.querySelector(`#player${i+1} .whiteBet`).value;

        /* this statement makes the white bets with negative value to 0,
        otherwise submit the value as it is*/
        if (wBet[i] <=0 ) {
            wBet[i] = 0
            document.querySelector(`#player${i+1} .color-white`).textContent = 0;
        } else {
            document.querySelector(`#player${i+1} .color-white`).textContent = wBet[i];
        }
    }

    for (let i = 0; i < 10; i++){       
        /* submit bets for pink color */
        pBet[i]  =  +document.querySelector(`#player${i+1} .pinkBet`).value;

        /* this statement makes the pink bets with negative value to 0,
        otherwise submit the value as it is*/
        if (pBet[i] <=0 ) {
            pBet[i] = 0
            document.querySelector(`#player${i+1} .color-pink`).textContent = 0;
        } else {
            document.querySelector(`#player${i+1} .color-pink`).textContent = pBet[i];
        }
    }

    for (let i = 0; i < 10; i++){       
        /* submit bets for green color */
        gBet[i]  =  +document.querySelector(`#player${i+1} .greenBet`).value;

        /* this statement makes the green bets with negative value to 0,
        otherwise submit the value as it is*/
        if (gBet[i] <=0 ) {
            gBet[i] = 0
            document.querySelector(`#player${i+1} .color-green`).textContent = 0;
        } else {
            document.querySelector(`#player${i+1} .color-green`).textContent = gBet[i];
        }
    }

    for (let i = 0; i < 10; i++){       
        /* submit bets for red color */
        rBet[i]  =  +document.querySelector(`#player${i+1} .redBet`).value;

        /* this statement makes the red bets with negative value to 0,
        otherwise submit the value as it is*/
        if (rBet[i] <=0 ) {
            rBet[i] = 0
            document.querySelector(`#player${i+1} .color-red`).textContent = 0;
        } else {
            document.querySelector(`#player${i+1} .color-red`).textContent = rBet[i];
        }
    }

    for (let i = 0; i < 10; i++){       
        /* submit bets for blue color */
        bBet[i]  =  +document.querySelector(`#player${i+1} .blueBet`).value;

        /* this statement makes the blue bets with negative value to 0,
        otherwise submit the value as it is*/
        if (bBet[i] <=0 ) {
            bBet[i] = 0
            document.querySelector(`#player${i+1} .color-blue`).textContent = 0;
        } else {
            document.querySelector(`#player${i+1} .color-blue`).textContent = bBet[i];
        }
    }
}

/* This function generates random color for the dice */
function diceRolling(){
    colorRolled1 = diceColors[ Math.floor( Math.random() * diceColors.length ) ];
    colorRolled2 = diceColors[ Math.floor( Math.random() * diceColors.length ) ];
    colorRolled3 = diceColors[ Math.floor( Math.random() * diceColors.length ) ];
    diceColor1.style.backgroundColor = colorRolled1 ;
    diceColor2.style.backgroundColor = colorRolled2 ;
    diceColor3.style.backgroundColor = colorRolled3 ;
}

/* This function will put the 3 randomized data on an Array */
function getResults() {
    result = [colorRolled1 , colorRolled2 , colorRolled3];   
}

// /* This function counts the yellow result */
// let countY = 0;
// let countW = 0;
// let countP = 0;
// let countG = 0;
// let countR = 0;
// let countB = 0;

// function countResult(countColor){
//     countColor = 0
//     for(var i = 0; i < 3 ; i++){
//         if (result[i] == diceColors[0] ){
//             countColor++;  
//         }  
//     }
//     console.log(` ${countColor}`);
// }

/* This function counts the yellow result */
var countY = 0;
function resultY(){
    countY = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[0] ){
            countY++;  
        }  
    }
    console.log(`Yellow count = ${countY}`);
}

/* This function counts the white result */
var countW;
function resultW(){
    countW = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[1] ){
            countW++;  
        }  
    }
    console.log(`White count = ${countW}`);
}

/* This function counts the pink result */
var countP;
function resultP(){
    countP = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[2] ){
            countP++;  
        }   
    }
    console.log(`Pink count = ${countP}`);
}

/* This function counts the green result */
var countG;
function resultG(){
    countG = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[3] ){
            countG++;  
        }   
    }
    console.log(`Green count = ${countG}`);
}

/* This function counts the red result */
var countR;
function resultR(){
    countR = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[4] ){
            countR++;  
        }    
    }
    console.log(`Red count = ${countR}`);
}

/* This function counts the blue result */
var countB;
function resultB(){
    countB = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[5] ){
            countB++;  
        }   
    }
    console.log(`Blue count = ${countB}`);
}


    
/* this function is to calculate the profit of players */
let playerProfit = new Array(10).fill(0);
function getProfit(countColor, colorBet){
    /* declares all additional profits, before every round, starts with 0 value 
    and will accumulate to be added to the total profit later */
    let addProfit = new Array(10).fill(0);
    let addHostProfit = 0;

    /* calculates the profit or loss */
    if (countColor !== 0) {
            let sum = 0;
            for (i = 0; i < 10 ; i++) {
                sum += colorBet[i];
                addProfit[i] += (countColor * colorBet[i]);
            }        
            addHostProfit -= (countColor * sum);
        } else {
            let sum = 0;
            for (i = 0; i < 10 ; i++) {        
                playerProfit[i] -= colorBet[i];
                addHostProfit += colorBet[i];
            }
        }
    

    /* Totals overall profit during the entire game */
    for (i=0;i < 10 ; i++){
        playerProfit[i] += addProfit[i];
        document.querySelector(`#player${i+1} .profit`).textContent = playerProfit[i];
    }
    hostProfit += addHostProfit;

    /* This will display the profit on html */
    document.getElementById("hostProfit").textContent = hostProfit;
}

/* This function notifies the host if player has to pay their loss */
function debtNotif(){
    for (i = 0; i < 10 ; i++){
        if (playerProfit[i] < 0 && playerProfit[i] >= -99) {
            document.getElementById(`notif${i+1}`).textContent = `Si ${document.getElementById(`name${i+1}`).value} ay may utang sa iyo na ${Math.abs(playerProfit[i])} petot`;
        } else if (playerProfit[i] < -99 ) {
            document.getElementById(`notif${i+1}`).textContent = `${Math.abs(playerProfit[i])} petot na ang utang ni ${document.getElementById(`name${i+1}`).value}. WAG HAYAANG TUMAKAS!`;
            console.log(document.getElementById(`notif${i+1}`).textContent);
        } else {
            document.getElementById(`notif${i+1}`).textContent = "";
        }       
    }
}

/* Resets input for bets */
function emptyFields() {
    let colorBetArray = [".yellowBet", ".whiteBet", ".pinkBet", ".greenBet", ".redBet", ".blueBet"];

    for ( j = 0; j < colorBetArray.length ; j++) {
        for ( i = 0; i < 10 ; i++) {
            document.querySelector(`#player${i+1} ${colorBetArray[j]}`).value = "";
        }
    }

}

/* This function generates random colors when the round starts
also executes the functions for the betting system*/
rollDice.addEventListener('click', function() {
    var confirmation = confirm("Pwede na ba mag simula?");
    if (confirmation == true) {
        submitBet();
        diceRolling();
        getResults();
        // countResult(countY);
        // countResult(countW);
        // countResult(countP);
        // countResult(countG);
        // countResult(countR);
        // countResult(countB);

        resultY();
        resultW();
        resultP();
        resultG();
        resultR();
        resultB();
        getProfit(countY,yBet);
        getProfit(countW,wBet);
        getProfit(countP,pBet);
        getProfit(countG,gBet);
        getProfit(countR,rBet);
        getProfit(countB,bBet);
        debtNotif();
        emptyFields();
    }
});

/* const for the game instruction button and modal */
const modal = document.querySelector(".modal");
const instButton = document.querySelector(".inst-button");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

instButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);