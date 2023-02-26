let userArrayLength = prompt("Please enter array length");
let userArray = prompt("Please enter array elements");

let array = userArray.split(", ");
array.length = +userArrayLength;
alert(`[${array}]`);

function compareNumbers(a, b) {
  return a - b;
}

array.sort();
alert(`[${array.sort(compareNumbers)}]`);

array.splice(1, 3)
alert(array);