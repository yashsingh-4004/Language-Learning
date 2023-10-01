// Nested if else

// Winning number 20

// 19 your guess is right
// <19 your guess is too low
// >19 your guess id too high


let Winningnum=20;
let userguess=Number(prompt("Guess a number"));

// prompt takes the input from the user
// *** prompt takes input only in string***
// if you want to take user input in Number then you have to convert prompt into Number 


if(Winningnum===userguess)
{
    console.log("Your guess is right");
}
else
{
    if(userguess<Winningnum)
    {
        console.log("Your guess is too low");
    }
    else
    {
        console.log("Your guess is too High");
    }
}

