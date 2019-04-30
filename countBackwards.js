// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
    // will now contain [10,8,6,4,2].
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
    // myArray will now have [9,7,5,3,1].
}


console.log(`Now printing out elements in ourArray and myArray ${myArray} and ${ourArray}`);
