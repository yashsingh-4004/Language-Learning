// For in loop in array

const items=["item1","item2","item3"];

for(item in items)
{
    console.log(item);
}

// For in loop provides the Indexes inside an array

// To get the items inside an array rather then its indexes

const items2=["item1","item2","item3"];

for(item2 in items2)
{
    console.log(items2[item2]); // <---- use this
}