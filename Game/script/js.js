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


/* Declares all bets in the variables are numbers */
let yBetP1 = 0;
let yBetP2 = 0;
let yBetP3 = 0;
let yBetP4 = 0;
let yBetP5 = 0;
let yBetP6 = 0;
let yBetP7 = 0;
let yBetP8 = 0;
let yBetP9 = 0;
let yBetP10 = 0;

let wBetP1 = 0;
let wBetP2 = 0;
let wBetP3 = 0;
let wBetP4 = 0;
let wBetP5 = 0;
let wBetP6 = 0;
let wBetP7 = 0;
let wBetP8 = 0;
let wBetP9 = 0;
let wBetP10 = 0;

let pBetP1 = 0;
let pBetP2 = 0;
let pBetP3 = 0;
let pBetP4 = 0;
let pBetP5 = 0;
let pBetP6 = 0;
let pBetP7 = 0;
let pBetP8 = 0;
let pBetP9 = 0;
let pBetP10 = 0;

let gBetP1 = 0;
let gBetP2 = 0;
let gBetP3 = 0;
let gBetP4 = 0;
let gBetP5 = 0;
let gBetP6 = 0;
let gBetP7 = 0;
let gBetP8 = 0;
let gBetP9 = 0;
let gBetP10 = 0;

let rBetP1 = 0;
let rBetP2 = 0;
let rBetP3 = 0;
let rBetP4 = 0;
let rBetP5 = 0;
let rBetP6 = 0;
let rBetP7 = 0;
let rBetP8 = 0;
let rBetP9 = 0;
let rBetP10 = 0;


let bBetP1 = 0;
let bBetP2= 0;
let bBetP3 = 0;
let bBetP4 = 0;
let bBetP5 = 0;
let bBetP6 = 0;
let bBetP7 = 0;
let bBetP8 = 0;
let bBetP9 = 0;
let bBetP10 = 0;

/* function to submit the bets */
function submitBet() {
    /* submit bets for yellow color */
    yBetP1 = +document.querySelector("#player1 .yellowBet").value;
    yBetP2 = +document.querySelector("#player2 .yellowBet").value;
    yBetP3 = +document.querySelector("#player3 .yellowBet").value;
    yBetP4 = +document.querySelector("#player4 .yellowBet").value;
    yBetP5 = +document.querySelector("#player5 .yellowBet").value;
    yBetP6 = +document.querySelector("#player6 .yellowBet").value;
    yBetP7 = +document.querySelector("#player7 .yellowBet").value;
    yBetP8 = +document.querySelector("#player8 .yellowBet").value;
    yBetP9 = +document.querySelector("#player9 .yellowBet").value;
    yBetP10 = +document.querySelector("#player10 .yellowBet").value;

    document.querySelector("#player1 .color-yellow").textContent = yBetP1;
    document.querySelector("#player2 .color-yellow").textContent = yBetP2;
    document.querySelector("#player3 .color-yellow").textContent = yBetP3;
    document.querySelector("#player4 .color-yellow").textContent = yBetP4;
    document.querySelector("#player5 .color-yellow").textContent = yBetP5;
    document.querySelector("#player6 .color-yellow").textContent = yBetP6;
    document.querySelector("#player7 .color-yellow").textContent = yBetP7;
    document.querySelector("#player8 .color-yellow").textContent = yBetP8;
    document.querySelector("#player9 .color-yellow").textContent = yBetP9;
    document.querySelector("#player10 .color-yellow").textContent = yBetP10;

    /* submit bets for white color */
    wBetP1 = +document.querySelector("#player1 .whiteBet").value;
    wBetP2 = +document.querySelector("#player2 .whiteBet").value;
    wBetP3 = +document.querySelector("#player3 .whiteBet").value;
    wBetP4 = +document.querySelector("#player4 .whiteBet").value;
    wBetP5 = +document.querySelector("#player5 .whiteBet").value;
    wBetP6 = +document.querySelector("#player6 .whiteBet").value;
    wBetP7 = +document.querySelector("#player7 .whiteBet").value;
    wBetP8 = +document.querySelector("#player8 .whiteBet").value;
    wBetP9 = +document.querySelector("#player9 .whiteBet").value;
    wBetP10 = +document.querySelector("#player10 .whiteBet").value;

    document.querySelector("#player1 .color-white").textContent = wBetP1;
    document.querySelector("#player2 .color-white").textContent = wBetP2;
    document.querySelector("#player3 .color-white").textContent = wBetP3;
    document.querySelector("#player4 .color-white").textContent = wBetP4;
    document.querySelector("#player5 .color-white").textContent = wBetP5;
    document.querySelector("#player6 .color-white").textContent = wBetP6;
    document.querySelector("#player7 .color-white").textContent = wBetP7;
    document.querySelector("#player8 .color-white").textContent = wBetP8;
    document.querySelector("#player9 .color-white").textContent = wBetP9;
    document.querySelector("#player10 .color-white").textContent = wBetP10;
    
    /* submit bets for pink color */
    pBetP1 = +document.querySelector("#player1 .pinkBet").value;
    pBetP2 = +document.querySelector("#player2 .pinkBet").value;
    pBetP3 = +document.querySelector("#player3 .pinkBet").value;
    pBetP4 = +document.querySelector("#player4 .pinkBet").value;
    pBetP5 = +document.querySelector("#player5 .pinkBet").value;
    pBetP6 = +document.querySelector("#player6 .pinkBet").value;
    pBetP7 = +document.querySelector("#player7 .pinkBet").value;
    pBetP8 = +document.querySelector("#player8 .pinkBet").value;
    pBetP9 = +document.querySelector("#player9 .pinkBet").value;
    pBetP10 = +document.querySelector("#player10 .pinkBet").value;

    document.querySelector("#player1 .color-pink").textContent = pBetP1;
    document.querySelector("#player2 .color-pink").textContent = pBetP2;
    document.querySelector("#player3 .color-pink").textContent = pBetP3;
    document.querySelector("#player4 .color-pink").textContent = pBetP4;
    document.querySelector("#player5 .color-pink").textContent = pBetP5;
    document.querySelector("#player6 .color-pink").textContent = pBetP6;
    document.querySelector("#player7 .color-pink").textContent = pBetP7;
    document.querySelector("#player8 .color-pink").textContent = pBetP8;
    document.querySelector("#player9 .color-pink").textContent = pBetP9;
    document.querySelector("#player10 .color-pink").textContent = pBetP10;

    /* submit bets for green color */
    gBetP1 = +document.querySelector("#player1 .greenBet").value;
    gBetP2 = +document.querySelector("#player2 .greenBet").value;
    gBetP3 = +document.querySelector("#player3 .greenBet").value;
    gBetP4 = +document.querySelector("#player4 .greenBet").value;
    gBetP5 = +document.querySelector("#player5 .greenBet").value;
    gBetP6 = +document.querySelector("#player6 .greenBet").value;
    gBetP7 = +document.querySelector("#player7 .greenBet").value;
    gBetP8 = +document.querySelector("#player8 .greenBet").value;
    gBetP9 = +document.querySelector("#player9 .greenBet").value;
    gBetP10 = +document.querySelector("#player10 .greenBet").value;

    document.querySelector("#player1 .color-green").textContent = gBetP1;
    document.querySelector("#player2 .color-green").textContent = gBetP2;
    document.querySelector("#player3 .color-green").textContent = gBetP3;
    document.querySelector("#player4 .color-green").textContent = gBetP4;
    document.querySelector("#player5 .color-green").textContent = gBetP5;
    document.querySelector("#player6 .color-green").textContent = gBetP6;
    document.querySelector("#player7 .color-green").textContent = gBetP7;
    document.querySelector("#player8 .color-green").textContent = gBetP8;
    document.querySelector("#player9 .color-green").textContent = gBetP9;
    document.querySelector("#player10 .color-green").textContent = gBetP10;

    /* submit bets for red color */
    rBetP1 = +document.querySelector("#player1 .redBet").value;
    rBetP2 = +document.querySelector("#player2 .redBet").value;
    rBetP3 = +document.querySelector("#player3 .redBet").value;
    rBetP4 = +document.querySelector("#player4 .redBet").value;
    rBetP5 = +document.querySelector("#player5 .redBet").value;
    rBetP6 = +document.querySelector("#player6 .redBet").value;
    rBetP7 = +document.querySelector("#player7 .redBet").value;
    rBetP8 = +document.querySelector("#player8 .redBet").value;
    rBetP9 = +document.querySelector("#player9 .redBet").value;
    rBetP10 = +document.querySelector("#player10 .redBet").value;

    document.querySelector("#player1 .color-red").textContent = rBetP1;
    document.querySelector("#player2 .color-red").textContent = rBetP2;
    document.querySelector("#player3 .color-red").textContent = rBetP3;
    document.querySelector("#player4 .color-red").textContent = rBetP4;
    document.querySelector("#player5 .color-red").textContent = rBetP5;
    document.querySelector("#player6 .color-red").textContent = rBetP6;
    document.querySelector("#player7 .color-red").textContent = rBetP7;
    document.querySelector("#player8 .color-red").textContent = rBetP8;
    document.querySelector("#player9 .color-red").textContent = rBetP9;
    document.querySelector("#player10 .color-red").textContent = rBetP10;

    /* submit bets for blue color */
    bBetP1 = +document.querySelector("#player1 .blueBet").value;
    bBetP2 = +document.querySelector("#player2 .blueBet").value;
    bBetP3 = +document.querySelector("#player3 .blueBet").value;
    bBetP4 = +document.querySelector("#player4 .blueBet").value;
    bBetP5 = +document.querySelector("#player5 .blueBet").value;
    bBetP6 = +document.querySelector("#player6 .blueBet").value;
    bBetP7 = +document.querySelector("#player7 .blueBet").value;
    bBetP8 = +document.querySelector("#player8 .blueBet").value;
    bBetP9 = +document.querySelector("#player9 .blueBet").value;
    bBetP10 = +document.querySelector("#player10 .blueBet").value;

    document.querySelector("#player1 .color-blue").textContent = bBetP1;
    document.querySelector("#player2 .color-blue").textContent = bBetP2;
    document.querySelector("#player3 .color-blue").textContent = bBetP3;
    document.querySelector("#player4 .color-blue").textContent = bBetP4;
    document.querySelector("#player5 .color-blue").textContent = bBetP5;
    document.querySelector("#player6 .color-blue").textContent = bBetP6;
    document.querySelector("#player7 .color-blue").textContent = bBetP7;
    document.querySelector("#player8 .color-blue").textContent = bBetP8;
    document.querySelector("#player9 .color-blue").textContent = bBetP9;
    document.querySelector("#player10 .color-blue").textContent = bBetP10;
}

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

/* This function counts the yellow result */
var countY = 0;
function resultY(){
    countY = 0
    for(var i = 0; i < 3 ; i++){
        if (result[i] == diceColors[0] ){
            countY++;  
        } else { 
            countY += 0;
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
        } else { 
            countW += 0;
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
        } else { 
            countP += 0;
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
        } else { 
            countG += 0;
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
        } else { 
            countR += 0;
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
        } else { 
            countB += 0;
        }     
    }
    console.log(`Blue count = ${countB}`);
}

/* this function is to calculate the profit of players */
function getProfit(){
    /* declares all additional profits, before every round, starts with 0 value 
    and will accumulate to be added to the total profit later */
    let addProfit1 = 0;
    let addProfit2 = 0;
    let addProfit3 = 0;
    let addProfit4 = 0;
    let addProfit5 = 0;
    let addProfit6 = 0;
    let addProfit7 = 0;
    let addProfit8 = 0;
    let addProfit9 = 0;
    let addProfit10 = 0;
    let addHostProfit = 0;

    /* counts additional profits or loss for yellow bets */
    if (countY !== 0) {
        addProfit1 += (countY * yBetP1);
        addProfit2 += (countY * yBetP2);
        addProfit3 += (countY * yBetP3);
        addProfit4 += (countY * yBetP4);
        addProfit5 += (countY * yBetP5);
        addProfit6 += (countY * yBetP6);
        addProfit7 += (countY * yBetP7);
        addProfit8 += (countY * yBetP8);
        addProfit9 += (countY * yBetP9);
        addProfit10 += (countY * yBetP10);
        addHostProfit -= (countY * (yBetP1 + yBetP2 + yBetP3 + yBetP4 + yBetP5 + yBetP6 + yBetP7 + yBetP8 + yBetP9 + yBetP10));

    } else {
        profit1 -= yBetP1;
        profit2 -= yBetP2;
        profit3 -= yBetP3;
        profit4 -= yBetP4;
        profit5 -= yBetP5;
        profit6 -= yBetP6;
        profit7 -= yBetP7;
        profit8 -= yBetP8;
        profit9 -= yBetP9;
        profit10 -= yBetP10;
        addHostProfit += (yBetP1 + yBetP2 + yBetP3 + yBetP4 + yBetP5 + yBetP6 + yBetP7 + yBetP8 + yBetP9 + yBetP10);
    }

    /* counts additional profits or loss for white bets */
    if (countW !== 0) {
        addProfit1 += (countW * wBetP1);
        addProfit2 += (countW * wBetP2);
        addProfit3 += (countW * wBetP3);
        addProfit4 += (countW * wBetP4);
        addProfit5 += (countW * wBetP5);
        addProfit6 += (countW * wBetP6);
        addProfit7 += (countW * wBetP7);
        addProfit8 += (countW * wBetP8);
        addProfit9 += (countW * wBetP9);
        addProfit10 += (countW * wBetP10);
        addHostProfit -= (countW * (wBetP1 + wBetP2 + wBetP3 + wBetP4 + wBetP5 + wBetP6 + wBetP7 + wBetP8 + wBetP9 + wBetP10));
        
    } else {
        profit1 -= wBetP1;
        profit2 -= wBetP2;
        profit3 -= wBetP3;
        profit4 -= wBetP4;
        profit5 -= wBetP5;
        profit6 -= wBetP6;
        profit7 -= wBetP7;
        profit8 -= wBetP8;
        profit9 -= wBetP9;
        profit10 -= wBetP10;
        addHostProfit += (wBetP1 + wBetP2 + wBetP3 + wBetP4 + wBetP5 + wBetP6 + wBetP7 + wBetP8 + wBetP9 + wBetP10);
    }

    /* counts additional profits or loss for pink bets */
    if (countP !== 0) {
        addProfit1 += (countP * pBetP1);
        addProfit2 += (countP * pBetP2);
        addProfit3 += (countP * pBetP3);
        addProfit4 += (countP * pBetP4);
        addProfit5 += (countP * pBetP5);
        addProfit6 += (countP * pBetP6);
        addProfit7 += (countP * pBetP7);
        addProfit8 += (countP * pBetP8);
        addProfit9 += (countP * pBetP9);
        addProfit10 += (countP * pBetP10);
        addHostProfit -= (countP * (pBetP1 + pBetP2 + pBetP3 + pBetP4 + pBetP5 + pBetP6 + pBetP7 + pBetP8 + pBetP9 + pBetP10));
    } else {
        profit1 -= pBetP1;
        profit2 -= pBetP2;
        profit3 -= pBetP3;
        profit4 -= pBetP4;
        profit5 -= pBetP5;
        profit6 -= pBetP6;
        profit7 -= pBetP7;
        profit8 -= pBetP8;
        profit9 -= pBetP9;
        profit10 -= pBetP10;
        addHostProfit += (pBetP1 + pBetP2 + pBetP3 + pBetP4 + pBetP5 + pBetP6 + pBetP7 + pBetP8 + pBetP9 + pBetP10);
    }

    /* counts additional profits or loss for green bets */
    if (countG !== 0) {
        addProfit1 += (countG * gBetP1);
        addProfit2 += (countG * gBetP2);
        addProfit3 += (countG * gBetP3);
        addProfit4 += (countG * gBetP4);
        addProfit5 += (countG * gBetP5);
        addProfit6 += (countG * gBetP6);
        addProfit7 += (countG * gBetP7);
        addProfit8 += (countG * gBetP8);
        addProfit9 += (countG * gBetP9);
        addProfit10 += (countG * gBetP10);
        addHostProfit -= (countG * (gBetP1 + gBetP2 + gBetP3 + gBetP4 + gBetP5 + gBetP6 + gBetP7 + gBetP8 + gBetP9 + gBetP10));
    } else {
        profit1 -= gBetP1;
        profit2 -= gBetP2;
        profit3 -= gBetP3;
        profit4 -= gBetP4;
        profit5 -= gBetP5;
        profit6 -= gBetP6;
        profit7 -= gBetP7;
        profit8 -= gBetP8;
        profit9 -= gBetP9;
        profit10 -= gBetP10;
        addHostProfit += (gBetP1 + gBetP2 + gBetP3 + gBetP4 + gBetP5 + gBetP6 + gBetP7 + gBetP8 + gBetP9 + gBetP10);
    }

    /* counts additional profits or loss for red bets */
    if (countR !== 0) {
        addProfit1 += (countR * rBetP1);
        addProfit2 += (countR * rBetP2);
        addProfit3 += (countR * rBetP3);
        addProfit4 += (countR * rBetP4);
        addProfit5 += (countR * rBetP5);
        addProfit6 += (countR * rBetP6);
        addProfit7 += (countR * rBetP7);
        addProfit8 += (countR * rBetP8);
        addProfit9 += (countR * rBetP9);
        addProfit10 += (countR * rBetP10);
        addHostProfit -= (countR * (rBetP1 + rBetP2 + rBetP3 + rBetP4 + rBetP5 + rBetP6 + rBetP7 + rBetP8 + rBetP9 + rBetP10));
    } else {
        profit1 -= rBetP1;
        profit2 -= rBetP2;
        profit3 -= rBetP3;
        profit4 -= rBetP4;
        profit5 -= rBetP5;
        profit6 -= rBetP6;
        profit7 -= rBetP7;
        profit8 -= rBetP8;
        profit9 -= rBetP9;
        profit10 -= rBetP10;
        addHostProfit += (rBetP1 + rBetP2 + rBetP3 + rBetP4 + rBetP5 + rBetP6 + rBetP7 + rBetP8 + rBetP9 + rBetP10);
    }

    /* counts additional profits or loss for blue bets */
    if (countB !== 0) {
        addProfit1 += (countB * bBetP1);
        addProfit2 += (countB * bBetP2);
        addProfit3 += (countB * bBetP3);
        addProfit4 += (countB * bBetP4);
        addProfit5 += (countB * bBetP5);
        addProfit6 += (countB * bBetP6);
        addProfit7 += (countB * bBetP7);
        addProfit8 += (countB * bBetP8);
        addProfit9 += (countB * bBetP9);
        addProfit10 += (countB * bBetP10);
        addHostProfit -= (countB * (bBetP1 + bBetP2 + bBetP3 + bBetP4 + bBetP5 + bBetP6 + bBetP7 + bBetP8 + bBetP9 + bBetP10));
    } else {
        profit1 -= bBetP1;
        profit2 -= bBetP2;
        profit3 -= bBetP3;
        profit4 -= bBetP4;
        profit5 -= bBetP5;
        profit6 -= bBetP6;
        profit7 -= bBetP7;
        profit8 -= bBetP8;
        profit9 -= bBetP9;
        profit10 -= bBetP10;
        addHostProfit += (bBetP1 + bBetP2 + bBetP3 + bBetP4 + bBetP5 + bBetP6 + bBetP7 + bBetP8 + bBetP9 + bBetP10);
    }

    /* adds the additional profit to the net profit */
    profit1 += addProfit1;
    profit2 += addProfit2;
    profit3 += addProfit3;
    profit4 += addProfit4;
    profit5 += addProfit5;
    profit6 += addProfit6;
    profit7 += addProfit7;
    profit8 += addProfit8;
    profit9 += addProfit9;
    profit10 += addProfit10;
    hostProfit += addHostProfit;
    
    /* Shows the current profits to the html */
    document.querySelector("#player1 .profit").textContent = profit1;
    document.querySelector("#player2 .profit").textContent = profit2;
    document.querySelector("#player3 .profit").textContent = profit3;
    document.querySelector("#player4 .profit").textContent = profit4;
    document.querySelector("#player5 .profit").textContent = profit5;
    document.querySelector("#player6 .profit").textContent = profit6;
    document.querySelector("#player7 .profit").textContent = profit7;
    document.querySelector("#player8 .profit").textContent = profit8;
    document.querySelector("#player9 .profit").textContent = profit9;
    document.querySelector("#player10 .profit").textContent = profit10;
    document.getElementById("hostProfit").textContent = hostProfit;
}

/* This function notifies the host if player has to pay their loss */
function debtNotif(){
    if (profit1 < 0 && profit1 >= -99) {
        document.getElementById("notif1").textContent = `Si ${document.getElementById("name1").value} ay may utang sa iyo na ${Math.abs(profit1)} petot`;
    } else if (profit1 < -99 ) {
        document.getElementById("notif1").textContent = `${Math.abs(profit1)} petot na ang utang ni ${document.getElementById("name1").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif1").textContent = "";
    }

    if (profit2 < 0 && profit2 > -99) {
        document.getElementById("notif2").textContent = `Si ${document.getElementById("name2").value} ay may utang sa iyo na ${Math.abs(profit2)} petot`;
    } else if (profit2 <= -99 ) {
        document.getElementById("notif2").textContent = `${Math.abs(profit2)} petot na ang utang ni ${document.getElementById("name2").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif2").textContent = "";
    }

    if (profit3 < 0 && profit3 >= -99) {
        document.getElementById("notif3").textContent = `Si ${document.getElementById("name3").value} ay may utang sa iyo na ${Math.abs(profit3)} petot`;
    } else if (profit3 < -99 ) {
        document.getElementById("notif3").textContent = `${Math.abs(profit3)} petot na ang utang ni ${document.getElementById("name3").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif3").textContent = "";
    }

    if (profit4 < 0 && profit4 >= -99) {
        document.getElementById("notif4").textContent = `Si ${document.getElementById("name4").value} ay may utang sa iyo na ${Math.abs(profit4)} petot`;
    } else if (profit4 < -99 ) {
        document.getElementById("notif4").textContent = `${Math.abs(profit4)} petot na ang utang ni ${document.getElementById("name4").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif4").textContent = "";
    }

    if (profit5 < 0 && profit5 >= -99) {
        document.getElementById("notif5").textContent = `Si ${document.getElementById("name5").value} ay may utang sa iyo na ${Math.abs(profit5)} petot`;
    } else if (profit5 < -99 ) {
        document.getElementById("notif5").textContent = `${Math.abs(profit5)} petot na ang utang ni ${document.getElementById("name5").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif5").textContent = "";
    }
    
    if (profit6 < 0 && profit6 >= -99) {
        document.getElementById("notif6").textContent = `Si ${document.getElementById("name6").value} ay may utang sa iyo na ${Math.abs(profit6)} petot`;
    } else if (profit6 < -99 ) {
        document.getElementById("notif6").textContent = `${Math.abs(profit6)} petot na ang utang ni ${document.getElementById("name6").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif6").textContent = "";
    }
    
    if (profit7 < 0 && profit7 >= -99) {
        document.getElementById("notif7").textContent = `Si ${document.getElementById("name7").value} ay may utang sa iyo na ${Math.abs(profit7)} petot`;
    } else if (profit7 < -99 ) {
        document.getElementById("notif7").textContent = `${Math.abs(profit7)} petot na ang utang ni ${document.getElementById("name7").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif7").textContent = "";
    }

    if (profit8 < 0 && profit8 >= -99) {
        document.getElementById("notif8").textContent = `Si ${document.getElementById("name8").value} ay may utang sa iyo na ${Math.abs(profit8)} petot`;
    } else if (profit8 < -99 ) {
        document.getElementById("notif8").textContent = `${Math.abs(profit8)} petot na ang utang ni ${document.getElementById("name8").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif8").textContent = "";
    }

    if (profit9 < 0 && profit8 >= -99) {
        document.getElementById("notif9").textContent = `Si ${document.getElementById("name9").value} ay may utang sa iyo na ${Math.abs(profit9)} petot`;
    } else if (profit9 < -99 ) {
        document.getElementById("notif9").textContent = `${Math.abs(profit9)} petot na ang utang ni ${document.getElementById("name9").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif9").textContent = "";
    }

    if (profit10 < 0 && profit10 >= -99) {
        document.getElementById("notif10").textContent = `Si ${document.getElementById("name10").value} ay may utang sa iyo na ${Math.abs(profit10)} petot`;
    } else if (profit10 < -99 ) {
        document.getElementById("notif10").textContent = `${Math.abs(profit10)} petot na ang utang ni ${document.getElementById("name10").value}. WAG HAYAANG TUMAKAS!`;
    } else {
        document.getElementById("notif10").textContent = "";
    }
}

/* Resets input for bets */
// Trying to find a way to make this code shorter
function emptyFields() {
    document.querySelector("#player1 .yellowBet").value = "";
    document.querySelector("#player2 .yellowBet").value = "";
    document.querySelector("#player3 .yellowBet").value = "";
    document.querySelector("#player4 .yellowBet").value = "";
    document.querySelector("#player5 .yellowBet").value = "";
    document.querySelector("#player6 .yellowBet").value = "";
    document.querySelector("#player7 .yellowBet").value = "";
    document.querySelector("#player8 .yellowBet").value = "";
    document.querySelector("#player9 .yellowBet").value = "";
    document.querySelector("#player10 .yellowBet").value = "";

    document.querySelector("#player1 .whiteBet").value = "";
    document.querySelector("#player2 .whiteBet").value = "";
    document.querySelector("#player3 .whiteBet").value = "";
    document.querySelector("#player4 .whiteBet").value = "";
    document.querySelector("#player5 .whiteBet").value = "";
    document.querySelector("#player6 .whiteBet").value = "";
    document.querySelector("#player7 .whiteBet").value = "";
    document.querySelector("#player8 .whiteBet").value = "";
    document.querySelector("#player9 .whiteBet").value = "";
    document.querySelector("#player10 .whiteBet").value = "";

    document.querySelector("#player1 .pinkBet").value = "";
    document.querySelector("#player2 .pinkBet").value = "";
    document.querySelector("#player3 .pinkBet").value = "";
    document.querySelector("#player4 .pinkBet").value = "";
    document.querySelector("#player5 .pinkBet").value = "";
    document.querySelector("#player6 .pinkBet").value = "";
    document.querySelector("#player7 .pinkBet").value = "";
    document.querySelector("#player8 .pinkBet").value = "";
    document.querySelector("#player9 .pinkBet").value = "";
    document.querySelector("#player10 .pinkBet").value = "";

    document.querySelector("#player1 .greenBet").value = "";
    document.querySelector("#player2 .greenBet").value = "";
    document.querySelector("#player3 .greenBet").value = "";
    document.querySelector("#player4 .greenBet").value = "";
    document.querySelector("#player5 .greenBet").value = "";
    document.querySelector("#player6 .greenBet").value = "";
    document.querySelector("#player7 .greenBet").value = "";
    document.querySelector("#player8 .greenBet").value = "";
    document.querySelector("#player9 .greenBet").value = "";
    document.querySelector("#player10 .greenBet").value = "";

    document.querySelector("#player1 .redBet").value = "";
    document.querySelector("#player2 .redBet").value = "";
    document.querySelector("#player3 .redBet").value = "";
    document.querySelector("#player4 .redBet").value = "";
    document.querySelector("#player5 .redBet").value = "";
    document.querySelector("#player6 .redBet").value = "";
    document.querySelector("#player7 .redBet").value = "";
    document.querySelector("#player8 .redBet").value = "";
    document.querySelector("#player9 .redBet").value = "";
    document.querySelector("#player10 .redBet").value = "";

    document.querySelector("#player1 .blueBet").value = "";
    document.querySelector("#player2 .blueBet").value = "";
    document.querySelector("#player3 .blueBet").value = "";
    document.querySelector("#player4 .blueBet").value = "";
    document.querySelector("#player5 .blueBet").value = "";
    document.querySelector("#player6 .blueBet").value = "";
    document.querySelector("#player7 .blueBet").value = "";
    document.querySelector("#player8 .blueBet").value = "";
    document.querySelector("#player9 .blueBet").value = "";
    document.querySelector("#player10 .blueBet").value = "";
}

/* This function generates random colors when the round starts
also executes the functions for the betting system*/
rollDice.addEventListener('click', function() {
    var confirmation = confirm("Pwede na ba mag simula?");
    if (confirmation == true) {
        submitBet();
        diceRolling();
        getResults();
        resultY();
        resultW();
        resultP();
        resultG();
        resultR();
        resultB();
        getProfit();
        debtNotif();
        emptyFields();
    }
});
