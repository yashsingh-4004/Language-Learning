// if 
// else if
// else if
// else if


let tempoutside=Number(prompt("Enter the Temp"));


if(tempoutside<=0)
{
    console.log("Extreamly Cold");
}
else if(tempoutside<10)
{
    console.log("Too cold");
}
else if(tempoutside<20)
{
    console.log("cold");
}
else if(tempoutside<30)
{
    console.log("Moderate");
}
else if(tempoutside<40)
{
    console.log("Too hot");
}
else
{
    console.log("Extream Hot");
}