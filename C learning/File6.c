// Project : Write a program to calculate the area of a square

#include <stdio.h>

int main(){

    int side;

    printf("Enter side");
    scanf("%d",&side);

    int area = side * side;
    printf("the area of a square is : %d",area);

    return 0;

}