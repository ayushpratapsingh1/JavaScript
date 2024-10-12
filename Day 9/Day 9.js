const choices=document.querySelectorAll(".choice");
let user = 0;
let comp = 0;
const msg = document.querySelector("#msg");
let user_score =document.querySelector("#user-score");
let comp_score =document.querySelector("#computer-score");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");
let gameActive = true;

const genCompChoice = () => {
    const options=["rock","paper","scissors"];//because we can generate random index
    const comp=Math.floor(Math.random()*3);//to get numbers from 0 to 2
    // rock,paper,scissors 
    return options[comp];
}

const draw = () => {
    console.log("drawn");
    msg.innerText="Draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "red";
}

const showWinner = (win,x,y) => {
    if(win)
    {
        user++;
        user_score.innerText=user;
        msg.innerText=`You Win! Your ${x} beats computer's ${y}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "antiquewhite";
    } else {
        comp++;
        comp_score.innerText=comp;
        msg.innerText=`Computer Win! Computer's ${y} beats your ${x}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "antiquewhite";
    }
}
const playGame = (choice) => {
    if(gameActive){
        console.log(choice);
        const compChoice=genCompChoice();
        console.log(compChoice);

        if(choice === compChoice)
        {
            draw();
        } else {
            let userWin = true;
            if(choice === "rock") {
                userWin = compChoice==="paper" ? false : true;
            } else if(choice === "paper"){
                userWin = compChoice === "scissors" ? false : true;
            } else {
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,choice,compChoice);
        }
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        console.log("clicked",choiceId);
        playGame(choiceId);
    })
})

const results = () => {
    if (comp > user) {
        msg.style.backgroundColor = "red";
        msg.innerText = `Computer wins by ${comp - user} point. What will you do in life!`;
    } else if (comp < user) {
        msg.style.backgroundColor = "green";
        msg.innerText = `You win by ${user - comp} point. You will do something in your life!`;
    } else {
        msg.style.backgroundColor = "brown";
        msg.innerText = "At least now do something in your life!";
    }
    gameActive=false;
}

const resetting = () => { 
    user = 0;
    comp = 0;
    msg.innerText = "Play your move";
    comp_score.innerText = comp;
    user_score.innerText = user;
    msg.style.color = "antiquewhite";
    msg.style.backgroundColor = "brown";
    gameActive=true;
}

reset.addEventListener("click",() => {
    resetting();
})
result.addEventListener("click",()=>{
    results()
});