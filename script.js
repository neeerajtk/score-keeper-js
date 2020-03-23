var player1 = document.querySelector("#p1");
var player2 = document.getElementById("p2");
var res1 = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var playNum = document.getElementsByTagName("input")[0];
var playTo = document.querySelector("p span");
var input = document.querySelector("input");
var input1= input.value;
console.log(input1);



console.log(player1);
console.log(player2);
disp1 = document.getElementById("score1");
disp2 = document.getElementById("score2");
player1.addEventListener("click",function(){
    if(!gameOver)
    {
    p1Score++;
    disp1.textContent = p1Score;
    if(p1Score===winningScore)
    {
        gameOver=true;
        disp1.classList.add("winner");

    }
    }
});
player2.addEventListener("click",function(){
    if(!gameOver)
    {
        p2Score++;
        disp2.textContent = p2Score;
        if(p2Score===winningScore)
        {
            gameOver=true;
            disp2.classList.add("winner"); 
        }
    }
});

res1.addEventListener("click",function(){
        gameOver=false;
        p1Score=0;
        p2Score=0;
        disp1.textContent=0;
        disp2.textContent=0; 
        disp1.classList.remove("winner"); 
        disp2.classList.remove("winner"); 

});
playNum.addEventListener("change",function(){
    playTo.textContent = input.value;
    winningScore=Number(input.value);
    reset();

})

function reset()
{
    gameOver=false;
    p1Score=0;
    p2Score=0;
    disp1.textContent=0;
    disp2.textContent=0; 
    disp1.classList.remove("winner"); 
    disp2.classList.remove("winner"); 
}