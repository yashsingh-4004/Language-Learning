// Chapter 3

// Conditional operators 

// Type 

// 1. If-else 
// 2. Switch 




/*

1. If-else statement 

syntax:

if(condition){
    // do something if TRUE
}

else{
    // do something if FALSE
}

*/


// #include <stdio.h>

// int main(){

//     int age;
//     printf("Enter age");
//     scanf("%d",&age);


//     if(age>=18){
//         printf("Youre an adult");
//     }

//     else{
//         printf("Youre a kid");
//     } 
    
//     return 0;
// }


/*


Combination of statemnets inside if-else condition is known 
as a "BLOCK" 

if(age>=18){
    printf("Youre an adult");
    printf("You can drive");     
    printf("You can vote");     
 }


*/


// #include <stdio.h>

// int main(){

//     int age;
//     printf("Enter age");
//     scanf("%d",&age);


//     if(age>=18){
//      printf("Youre an adult");
//      printf("You can drive");     
//      printf("You can vote");     
//      }

//     else{
//         printf("Youre a kid");
//     } 
    
//     return 0;
// }


/*


If we have to put more than 2 condiotions inside a program then 
we will use "Else if" statement 

if(condition){
    // First condition if TRUE
}

else if(Condition){
    // Second condition if TRUE
}

else{
    // do something if FALSE
}


*/


// #include <stdio.h>

// int main(){

//     int marks;
//     printf("Enter your marks \n");
//     scanf("%d",&marks);


//     if(marks<=100 && marks>90){
//         printf("A+ \n");
//     }

//     else if(marks<=90 && marks>80){
//         printf("A \n");
//     }

//     else if(marks<=80 && marks>70){
//         printf("B \n");
//     }

//     else if(marks<=70 && marks>60){
//         printf("C \n");
//     }

//     else if(marks<=60 && marks>50){
//         printf("D \n");
//     }

//     else{
//         printf("Fail \n");
//     }


//     return 0;
// }





/*

2. Ternary Operators

syntax :

conditon ? do something if TRUE : do something if FALSE;

*/


// #include <stdio.h>

// int main(){

//     int age;
//     printf("Enter age \n");
//     scanf("%d", &age);

//     age>=18 ? printf("Adult /n") : printf("Child /n");


//     return 0;
// }




/*

3. Switch

syntax :

switch(number){

    case C1: //do something
        break;               <----- Used to exit the statement when condition is true

    case C2: //do something
        break;

    default: // do something

}



Properties of switch 

1. Cases can be in any order 

2. Nested switch (switch inside switch) is allowed 

*/


// #include <stdio.h>

// int main(){

//     int day; // mon-1,tue-2,wed-3,thu-4,fri-5,sat-6,sun-7
//     printf("Enter day (1-7) \n");
//     scanf("%d", &day);


//     switch(day){

//         case 1: printf("monday");
//         break;

//         case 2: printf("tuesday");
//         break;

//         case 3: printf("wednesday");
//         break;

//         case 4: printf("Thrusday");
//         break;

//         case 5: printf("Friday");
//         break;

//         case 6: printf("saturday");
//         break;

//         case 7: printf("sunday");
//         break;

//         default : printf("Not a vaild number");

//     }

//     return 0;
// }





/*

Practice Question 9

Write a program to check if a student is passed or failed 

marks>30 is Pass

marks<=30 is Fail

*/

 
// #include <stdio.h>

// int main(){

//     int marks;
//     printf("Enter marks");
//     scanf("%d",&marks);


//     if(marks>30){
//         printf("PASS /n");
//     }

//     else{
//         printf("FAIL /n");
//     }

//     return 0;
// }




/*

Practice Question 10 

Write a program to give grades to a student 

marks < 30 is C

30 <= marks < 70 is B

70 <= marks <90 is A 

90 <= marks <=100 is A+

*/


// #include <stdio.h>

// int main() {

//     int marks;
//     printf("Enter marks \n");
//     scanf("%d", &marks);

    
//     if(marks<=100 && marks>=90){
//         printf("A+");
//     }

//     else if(marks<90 && marks>=70){
//         printf("A");
//     }

//     else if(marks<70 && marks>=30){
//         printf("B");
//     }

//     else{
//         printf("C");
//     }



//     return 0;
// }




/*

Practical Question 12 

Write a program to find if a character enterd by user is upper case or not.

*/


// #include <stdio.h>

// int main(){

//     char ch;
//     printf("Enter a character \n");
//     scanf("%c", &ch);

//     if(ch>='A' && ch<='Z'){
//         printf("Character is Uppercase");
//     }

//     else if (ch>='a' && ch<='z'){
//         printf("Charater is lowercase");
//     }

//     else{
//         printf("not an english letter");
//     }

//     return 0;
// }




