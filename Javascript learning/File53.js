//  parameter destructuring

const person=
{
    firstname:"habibi",
    gender:"male",
    age:"32"
}

const myfunc=({firstname,gender,age})=>
{
    console.log(firstname);
    console.log(gender);
    console.log(age);
}

myfunc(person)

