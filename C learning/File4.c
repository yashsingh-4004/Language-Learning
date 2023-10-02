// Output 


// using "printf("")" can give any output in C language 
// whatever inside the printf bracket double colloms is shown
// as a output




/*#include <stdio.h>

int main(){


    printf("This is a output \n");
    printf("This is a output \n");
    printf("This is a output \n");
    printf("This is a output \n");


    return 0;
}*/

// \n provides the output into the next line




/*

Output Cases 

Sometimes we have to get the value of some variable 
as a output to do that there are several cases


Cases

1. Integers 

printf("age is %d",age);


2. Real numbers

printf("value of pi is %f",pi);


3. Characters

printf("hashtag looks like this %c",hashtag);


*/




#include <stdio.h>

int main(){

    int number = 10;
    float pi = 3.14;
    char hashtag = '#';

    printf("number is %d \n",number);
    printf("pi value is %f \n",pi);
    printf("hashtag looks like this %c \n",hashtag);

    return 0;
}









