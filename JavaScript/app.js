//Write JavaScript code to fetch the first item in the grocery items list.
let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
let firstItem = shoppingList[0];
console.log(firstItem);
//Implementing push Method:
shoppingList.push("carrots");
console.log(shoppingList)
//Implementing pop Method:
shoppingList.pop();
console.log(shoppingList);
//Implementing splice Method:
shoppingList.splice(1, 2, "cucumber", "Bellpeppers");
console.log(shoppingList);


