/*  Operators

A. Arithmatic operators ----> + , - , / , * , %

B. Relational operators

C. Logical operators 

D. Bitwise oprators 

E. Assignment operators 

F. Ternary operators 





B. Relational operators  ( True = 1      False = 0)

==  ( is used to ask C program that 2 variables are equal or not )

>,>=  (Is used to ask C program that one value is greater than the other one or not , Equal to) 

<,<=   (Is used to ask C program that one value is smaller than the other one or not , Equal to)   

!=   ( when the 2 values are not equal then it will return 1 & if they were equal then 0) */


// #include <stdio.h>

// int main(){

//     printf("%d \n",4==4);
//     printf("%d \n",5>=4);
//     printf("%d \n",3<=4);
//     printf("%d \n",2!=4);

//     printf("\n");

//     printf("%d \n",1==4);
//     printf("%d \n",2>=4);
//     printf("%d \n",5<=4);
//     printf("%d \n",4!=4);

//     return 0;
// }





/*

C. Logical oprators

Logical operators were used when we have to Check 2 conditions.
If the both conditions were true the the task will gets performed.
If one of the conditions were true then also task has to gets performed. 
If both the conditions were False then The task wont get executed. 


Types of Logical Operator 

1. && == AND operator 
2. || == OR operator 
3. !  == NOT operator     


1. && AND operator 

2 or more than 2 conditions should be true to get the output as True 
If one of the conditions gets False then the output will become false  


2. || OR operator 

Even if 1 condition is true then the output will come as true
If all the conditions were false then output will come as false 


3. ! NOT operator

If the output of The expression is true it will make it false
If the output of The expression is false it will make it true   */


// #include <stdio.h>

// int main(){

//     printf("%d \n", 3<4 && 1<2);
//     printf("%d \n", 3<4 || 2<1);
//     printf("%d \n", !(3>4));

//     printf("\n");

//     printf("%d \n", 3<4 && 3<2);
//     printf("%d \n", 5<4 || 5<3);
//     printf("%d \n", !(5>4));


//     return 0;
// }





/*

E. Assignment Operators 

1. = ( assigns the value of one variable into another )

2. += ((a = a + b) can be written as ( a += b))

3. -= ((a = a - b) can be written as ( a -= b))

4. *= ((a = a * b) can be written as ( a *= b))

5. /= ((a = a / b) can be written as ( a /= b))

6. %= ((a = a % b) can be written as ( a %= b)) */


// #include <stdio.h>

// int main(){

//     int a = 4;
//     int b = 5;

//     a += b; // (a = a + b)
//     printf("%d \n", a);

//     a -= b; // (a = a - b)
//     printf("%d \n", a);

//     a *= b; // (a = a * b)
//     printf("%d \n", a);

//     a /= b; // (a = a / b)
//     printf("%d \n", a);

//     a %= b; // (a = a - b)
//     printf("%d \n", a);

//     return 0;
// }





/*
Practice question 5

1.Write a program to check if a number is divisiable by 2 or not. */


// #include <stdio.h>

// int main() {

//     int num1;
//     printf("Enter num1");
//     scanf("%d", &num1);

//     printf("%d", num1 % 2 == 0);



//     return 0;
// }


/*
2. Write a program to check if a number is divisiable by 2 or not. */

// #include <stdio.h>

// int main(){

//     // even ---> 1
//     // Odd ---> 0

//     int num1;
//     printf("Enter num1");
//     scanf("%d", &num1);

//     printf("%d", num1 % 2 == 0);


//     return 0;
// }





/*
Practice question 

Print 1(true) or 0(false) for the following statements : 

a. if its sunday & its snowing ---> True

b. If its monday or its raining -> True 

c. IF a number is greater than 9 & less Than 100 --> True */


// A. 

// #include <stdio.h>

// int main() {

//     int issunday = 1;
//     int issnowing = 1;

//     printf("%d", issunday && issnowing);


//     return 0;
// }




// B.

// #include <stdio.h>

// int main(){

//     int ismonday = 0;
//     int israining = 1;

//     printf("%d", ismonday || israining);


//     return 0;
// }




// C.

// #include <stdio.h>

// int main(){

//     int num1;
//     printf("Enter num1");
//     scanf("%d", &num1);

//     printf("%d", (num1>9) && (num1<100));

//     return 0;
// }





/*
Write a program to print the average of 3 numbers. */


// #include <stdio.h>

// int main(){

//     int num1,num2,num3;

//     printf("Enter num1");
//     scanf("%d", &num1);

//     printf("Enter num2");
//     scanf("%d", &num2);

//     printf("Enter num3");
//     scanf("%d", &num3);

//     printf("%d", (num1+num2+num3)/3);


//     return 0;
// }




/*
Write a program to check if a given character is a digit or not */


// #include <stdio.h>

// int main(){

//     int isdigit;
//     printf("Enter a character");
//     scanf("%d",&isdigit);

//     if(isdigit>=0 && isdigit<=9){
//         printf("This is a digit");
//     }

//     else{
//         printf("Not a digit");
//     }


//     return 0;
// }




/*
write a program to print the smallest number of 2 */

#include <stdio.h>

int main(){

    int num1,num2;

    printf("Enter num1");
    scanf("%d", &num1);

    printf("Enter num2");
    scanf("%d", &num2);


    if(num1<num2){
        printf("Num1 is the smaller");
    }

    else{
        printf("Num2 is the smaller");
    }


    return 0;
}