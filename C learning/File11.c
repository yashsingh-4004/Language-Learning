// Loop control instructions

/*
Loop control statement is used when we have to repeat some part of 
program numourous times.
*/


// Types of "Loop control instructions"

// 1. For loop
// 2. while loop 
// 3. do while loop




/*

1. For loop 

syntax :

for(initialisation; condition; updation;){
     
// do something;

}


A.) Initialisation 

refers to a variable which has a value inside it and tracks that "How many
times loop has been executed".


B.) Condition

Refers to For how many times the loop should be executed. It takes a condition
and executes the Instructions inside the loop until that condition is true 
as soon as the condition gets false the loop gets stopped.


C.) Updation

Refers to Update the condition after every time it gets successfully executes



The loop starta with initialisation then it checks the condition and executes 
the set of instructions inside the loop and then goes to updation to update the 
condition....This process will continously executes until the condition 
gets false and loop gets stopped.

*/

// #include <stdio.h>

// int main(){

//     for(int i=1; i<=100; i=i+1){
//         printf("%d \n", i);
//     }

//     return 0;
// }


/*

Practice Question 
Print the Numbers from 0 to 10

*/


// #include <stdio.h>

// int main(){

//     for(int i=0; i<=10; i++){
//         printf("%d \n", i);
//     }

//     return 0;
// }





/*

Increment Operators 

1. i++ (Pre increment) ----> Use then increment */


// #include <stdio.h>

// int main(){

//     int i=1;
//     printf("%d \n", i++);

//     return 0;
// }



/*
2. ++i (post increment) ----> increment then use 
*/

// #include <stdio.h>

// int main(){

//     int i=1;
//     printf("%d \n", ++i);

//     return 0;
// }


/*
Just like Pre and post increment operators we have pre and post decrement 
operators

1. --i (Pre decrement)----> decrease then use
2. i-- (post decrement) ----> use then decrease 
*/





// Loop counter can be float or even character 

// #include <stdio.h>

// int main(){

//     for(float i=1.0; i<=5.0; i++){
//         printf("%f \n", i);
//     }

//     for(char i='A'; i<='Z'; i++){
//         printf("%c \n", i);
//     }

//     return 0;
// }




/*

2. While Loop

syntax:


(increment)

while(condition){

    do something

    (updation)

}

variable is going to be declared outside while loop

*/


// #include <stdio.h>

// int main(){

//     int i=1;

//     while(i<=5){
//         printf("hello world \n");
//         i++;
//     }

//     return 0;
// }



/*

practice Question : Print the number 0 to n, if n is given by user

*/

// #include <stdio.h>

// int main(){

//     int n;

//     printf("Enter n value");
//     scanf("%d",&n);

    
//     int i=1;

//     while(i<=n){
//         printf("%d \n",i);
//         i++;
//     }
    
//     return 0;
// }




// #include <stdio.h>

// int main(){

//     int startnum,endnum;

//     printf("Enter starting number");
//     scanf("%d",&startnum);

//     printf("Enter Ending number");
//     scanf("%d",&endnum);


//     for(int i=startnum; i<=endnum; i++)
//     {
//         printf("%d \n",i);
//     }

//     return 0;
// }




/*

3. Do while Loop

syntax:

(Incrementation)

do{

    do something

    (updation) 

}while(condition);

*/


// #include <stdio.h>

// int main(){

//     int i=0;

//     do{
//         printf("%d \n", i);
//         i++;
//     }while(i<=5);

//     return 0;
// }




/*

practice Question : Print the sum of First N Natural Numbers  2. Also print them in reverse 

*/

// #include <stdio.h>

// int main(){

//     int num,sum=0;

//     printf("Enter num");
//     scanf("%d",&num);

//     for(int i=0; i<=num; i++)
//     {
//         sum=sum+i;
    
//     }

//     printf("sum is %d", sum);


//     for(int j=num; j>=0; j--)
//     {
//         printf("%d \n", j);
//     }


//     return 0;
// }




/*

practice Question : Print The table of a number input by the user

*/


// #include <stdio.h>

// int main(){

//     int num,multiply;

//     printf("Enter the number");
//     scanf("%d",&num);


//     for(int i=1; i<=10; i++)
//     {
//         multiply = i*num;
//         printf("%d \n",multiply);
//     }

//     return 0;
// }
