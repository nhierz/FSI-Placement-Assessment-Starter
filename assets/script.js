// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Nhi Tran" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

//ID ELEMENTS 
let gbPlusBtn = document.querySelector('#add-gb');
let gbMinusBtn = document.querySelector('#minus-gb');
let ccPlusBtn = document.querySelector('#add-cc');
let ccMinusBtn = document.querySelector('#minus-cc');
let sugarPlusBtn = document.querySelector('#add-sugar');
let sugarMinusBtn = document.querySelector('#minus-sugar');


// Code to update name display
document.getElementById('credit').textContent = `Created by ${yourName}`

//quantity update
let gbQty = document.querySelector('#qty-gb');
let ccQty = document.querySelector('#qty-cc');
let sugarQty = document.querySelector('#qty-sugar');
let totalQty = document.querySelector('#qty-total');






//gingerbread ADD button
let gbAdd = document.createElement("button");
gbAdd.textContent = '+';
console.log ("button added");
gbPlusBtn.append(gbAdd)

//gingerbread MINUS button
let gbMinus = document.createElement("button");
gbMinus.textContent = '-';
console.log ("button added");
gbMinusBtn.append(gbMinus)



// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1;

    gbQty.textContent = gb;
    totalQty.textContent = gb + cc + sugar;

console.log('Gingerbread + button was clicked!')

})

//'-' Gingerbread cookie click
gbMinusBtn.addEventListener('click', function() {
    gb = gb - 1;

    gbQty.textContent = gb;
    totalQty.textContent = gb + cc + sugar;

console.log('Gingerbread - button was clicked!')

})

//chocolate chip cookie


//chocolate chip ADD button
let ccAdd = document.createElement("button");
ccAdd.textContent = '+';
console.log ("button added");
ccPlusBtn.append(ccAdd)

//chocolate chip MINUS button
let ccMinus = document.createElement("button");
ccMinus.textContent = '-';
console.log ("button added");
ccMinusBtn.append(ccMinus)



// Event listener for clicks on the "+" button for Gingerbread cookies
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;

    ccQty.textContent = cc;
    totalQty.textContent = gb + cc + sugar;

console.log('chocolate chip + button was clicked!')

})

//'-' chocolate chip cookie click
ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1;

    ccQty.textContent = cc;
    totalQty.textContent = gb + cc + sugar;

console.log('chocolate chip - button was clicked!')

})


//sugar cookie




// TODO: Hook up event listeners for the rest of the buttons