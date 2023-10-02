// Input 


/* Input is used to take the input from the user and 
prints it accordingly */


// To take the input from the user :

// scanf("%d",&variable_name)


/* This scanf function will take a input from the user
and stores it inside a variable accordingly */



// Project Using Input function : sum of 2 numbers

#include <stdio.h>

int main(){

    int number1;

    printf("Enter number 1 \n");
    scanf("%d",&number1);

    int number2;

    printf("Enter number 2 \n");
    scanf("%d",&number2);

    int sum = number1 + number2;
    printf("sum is : %d", sum);

    return 0;

}