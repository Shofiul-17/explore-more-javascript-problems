
/* ===========================
   ====== Typeof method ======
=========================== */
const country = "Bangladesh"; 
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: "Agun"};
const friends = [13, 14, 11, 17, 21, 16, 15];
function add(num1, num2){
    return num1 + num2
}


console.log(typeof country);         // Expected output String
console.log(typeof age);             // Expected output Number 
console.log(typeof inIndependent);   // Expected output Boolean
console.log(typeof student);         // Expected output Object
console.log(typeof friends);         // What will Expected output? or Array?
console.log(typeof add);             // Expected output Function



/* ==================================
   ====== Array.isArray() method ======
================================== */

const friends2 = [13, 14, 11, 17, 21, 16, 15];
console.log(Array.isArray(friends)); // Expected output true (true means it's an array)?



const country2 = "Bangladesh"; 
const age2 = 52;
console.log(Array.isArray(country2));  // Expected output false
console.log(Array.isArray(age2));      // Expected output false 



/* ==============================
   ====== include() method ======
============================== */
// Use the include() method to see if the number 19 is part of the array.
//    const friends = [13, 14, 11, 17, 21, 16, 15];
console.log(friends.includes(19));
console.log(friends.includes(21));




/* ==============================
   ====== indexof() method ======
============================== */
// To verify if the array's 19th element exists, use the indexof() method.
if(friends.indexOf(19) !== -1){
    console.log("In the array, number 19 is present.");
}
else{
    console.log("In the array, 19 is NOT present")
}


/* ==============================
   ====== concat() method ======
============================== */
const oldFriends = [13, 14, 11, 17, 21, 16, 15];
const newFriendAge = [12, 13, 11, 14];

const allFriends = newFriendAge.concat(friends);
console.log(allFriends);
