// Sort method
// ASCII Table 
// Char : ascii value

/*

0	zero	48
1	one	    49
2	two	    50
3	three	51
4	four	52
5	five	53
6	six	    54
7	seven	55
8	eight	56
9	nine	57



:	colon	            58
;	semi-colon	        59
<	Less-than sign	    60
=	Equals sign	        61
>	Greater-than sign	62
?	Question mark	    63
@	At sign	            64



A   Uppercase a     65
B	Uppercase b     66
C	Uppercase c	    67
D	Uppercase d	    68
E	Uppercase e	    69
F	Uppercase f	    70
G	Uppercase g	    71
H	Uppercase h	    72
I	Uppercase i	    73
J	Uppercase j	    74
K	Uppercase k	    75
L	Uppercase l	    76
M	Uppercase m	    77
N	Uppercase n	    78
O	Uppercase o	    79
P	Uppercase p	    80
Q	Uppercase q	    81
R	Uppercase r	    82
S	uppercase s	    83
T	Uppercase t	    84
U	Uppercase u	    85
V	Uppercase v	    86
W	Uppercase w	    87
X	Uppercase x	    88
Y	Uppercase y	    89
Z	Uppercase z	    90



[	Left square bracket	    91
\	backslash	            92
]	Right square bracket	93
^	caret	                94
_	underscore	            95
`	Grave accent	        96



a	Lowercase a	    97
b	Lowercase b	    98
c	Lowercase c	    99
d	Lowercase d	    100
e	Lowercase e	    101
f	Lowercase f	    102
g	Lowercase g	    103
h	Lowercase h	    104
i	Lowercase i	    105
j	Lowercase j	    106
k	Lowercase k	    107
l	Lowercase l	    108
m	Lowercase m	    109
n	Lowercase n	    110
o	Lowercase o	    111
p	Lowercase p	    112
q	Lowercase q	    113
r	Lowercase r	    114
s	Lowercase s	    115
t	Lowercase t	    116
u	Lowercase u	    117
v	Lowercase v	    118
w	Lowercase w	    119
x	Lowercase x	    120
y	Lowercase y	    121
z	Lowercase z	    122



{	Left curly brace	123
|	Vertical bar	    124
}	Right curly brace	125
~	tilde	            126

*/



/*

Sort method is used to sort the values inside an 
array.

Sort method can also takes the Callback function.

The javascript reads the values inside an array 
as strings.

javascript reads the first character of the values
inside an array and uses ASIIC values to sort them
accordingly.

*/




/*

const myarray=[10,31,5,200,100];
myarray.sort();
console.log(myarray);

Expected output ----> [5,10,31,100,200]
Real output ----> [10, 100, 200, 31, 5]

*/




/* 

To get the expected output :

We can use the callback functions inside the sort 
method.

*/

const myarray=[10,31,5,200,100];

myarray.sort((a,b)=>{
    return a-b;
})

console.log(myarray);


/*

The perameters inside the callback function takes 
the 2 values from LHS from array and substracts
it.


If the output comes POSITIVE then value stored 
in second perameter will come before the first 
perameter. 

200,100

a = 200
b = 100

a-b ---> 200-100 = 100 ---> Positive ---> b,a


If the output comes NEGETIVE then value stored 
in First perameter will come first and value stored 
in perameter second after that.

10,31

a = 10
b = 31

a-b ---> 10-31 = -21 ---> Negative ---> a,b

*/



// Real life example of sorting in websites

// Price Hightolow or lowtohigh


const myproducts=[
    {productID:1, productname: "p1", price:500},
    {productID:2, productname: "p2", price:3000},
    {productID:3, productname: "p3", price:470},
    {productID:4, productname: "p4", price:190},
    {productID:5, productname: "p5", price:860},
]

myproducts.sort((a,b)=>{
    return a.price - b.price 
})

console.log(myproducts);







