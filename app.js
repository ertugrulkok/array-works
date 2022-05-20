const fruits = ["apple", "banana", "kiwi", "orange", "mango"];
const newEnter = document.getElementById("newEnter");
const removedIndex = document.getElementById("delete");

function myFunction() {
  var userInput = document.getElementById("new");
  fruits.push(userInput.value);
  newEnter.innerHTML = fruits;
  userInput.value = "";
}
function myFunction2() {
  deletedFruit = fruits.splice(removedIndex.value, 1);
  var newList = document.createElement("li");
  newList.append(deletedFruit);
  document.querySelector(".trashcan").append(newList);
  newEnter.innerHTML = fruits;
  removedIndex.value = "";
}
function myFunction3() {
  deletedPop();
  newEnter.innerHTML = fruits;
}

function myFunction4() {
  deletedShift();
  newEnter.innerHTML = fruits;
}
 
function deletedPop() {
  deletedFruit = fruits.pop();
  var newList = document.createElement("li");
  newList.append(deletedFruit);
  document.querySelector(".trashcan").append(newList);
}
function deletedShift() {
  deletedFruit = fruits.shift();
  var newList = document.createElement("li");
  newList.append(deletedFruit);
  document.querySelector(".trashcan").append(newList);
}
