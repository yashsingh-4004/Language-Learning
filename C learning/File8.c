// Chapter 2

// instructions & operators 


/* What are instructons ?

These are statements in a program 


Types of instrutions 

1. Type declaration instructions 
2. Arithmatic instructions 
3. Control instructions 


1. Type declaration instructions  ----> Declare variable before using it 

VALID 

int a = 22;
int b = a;

int c = b + 1;
int d = 1,e;

int a,b,c;                  ( Declare before using variable )
a = b = c = 1;





2. Arithmatic INstructions

Instruction in C which contains some oprands and oprators 

a + b 

Variables on which opration are getting performed are known as oprands 
Ex a = oprand 1 
   b = oprand 2


symbole which shows that which operation is going to perform is known as oprators
Ex : + = oprator


Note : Arithmatic instructions are declared on RHS and inside the variable which is decleared in LHS 

int var1 = a+b; ----> VALID 
a+b = int var1; ----> INVALID 


VALID             INVALID 

a = b + c         b + c = a 
a = b*c           a = bc
a = b/c           a = b^c




A.) Modular operator  ----> Returns reminder for int 

3 % 2 = 1         ----> Positive numerator = Positive reminder
-3 % 2 = -1       ----> Negetive numerator = Negetive reminder

Modular Oprators dont works on float values 

3.2 % 2.2 = INVALID 




B.) Type conversion 

int op int ----> int 
2 * 2 = 4

int op float ----> float  
2 * 2.0 = 4.0

float op float ----> float  
2.0 * 2.0 = 4.0




C.) Types of conversion 

1. Implicit ---->  Conversion done by compiler on its own

2. explicit ---->  Conversion done by the programmer or user 


Implicite conversion says that compiler can store the int value 
inside the float variable but float value cannot be stored in int variable
but as programer if we wanted to convert The datatype then we can do 

practice question : solve : int a = 1.999999;


#include <stdio.h>

int main(){
    int a = (int) 1.999999; <---- The (int) will forcefully converts the float value into int value

    printf("%d \n", a);

    return 0;
}




D.) Operator precedence 

Just like the BODMAS rule in maths Which oprators is first and Which 
one is going to be performded next is already defined in C compiler 
whichever oprator has more priority will come first whichever has least
will come last 

1. Multiply ( * ) , Divide ( / ) , Modulo ( % )

2. add ( + ) , substraction ( - )

3. Equals to or assignment operator ( = )

Note : Whenever the bracket comes then Brackets will be opened first 




E.) Assosiativity ( for same precedence )

Left to Right 

x = 4*3/6*2
x = 12/6 *2
x = 2*2 = 4 


#include <stdio.h>

int main(){

   int a = 4*3/6*2;

   printf("%d \n", a);

   return 0;
}


Practice Question : 

A. 5*2-2*3 
   10-6
   4 answer 

B. 5*2/2*3
   10/2 *3
   5*3
   15 answer

C. 5*(2/2)*3
   5*1*3
   15 answer

D. 5+2/2*3
   5+1*3
   5+3
   8 answer



#include <stdio.h>

int main(){

   int a = 5*2-2*3 ;
   int b = 5*2/2*3 ;
   int c = 5*(2/2)*3 ;
   int d = 5+2/2*3 ;

   printf("%d \n", a ); 
   printf("%d \n", b ); 
   printf("%d \n", c ); 
   printf("%d \n", d ); 

   return 0;
}




3 Control Instructions 

In C language The Statement gets executed line by line. But there 
are some statements in C which has the power to change the flow
of statement 

There are 4 types of Control instructions 

1. sequence control
2. decision control
3. loop control
4. Case control


*/

