/* loops and arrays part 1

Challenge: you are at your shift at the shop and the owner 
has left you with a long list of things in the inventory. 
He has asked you to find out how many 'mustard' and 'Mustard' bottles you have in 
stock. Use a for loop to count the amount of 'mustard' you have.
 */

const shopInventory = [
  "milk",
  "cheddar",
  "Mustard",
  "ketchup",
  "olive oil",
  "cheddar",
  "milk",
  "garlic",
  "mustard",
  "mayo",
  "carrots",
  "Mustard",
  "cheddar",
  "mustard",
  "mayo",
  "orange juice",
];

let count = 0;

for (let i = 0; i < shopInventory.length; i++) {
  if (shopInventory[i] === "mustard") {
    count += 1;
  } else if (shopInventory[i] === "Mustard") {
    count += 1;
  }
}

console.log(count);
