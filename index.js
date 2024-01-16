const numbers = [2, 6, 12, 7, 22, 35];
        // index 0, 1, 2,  3,  4,  5 

// Ex.#1
const firstElement = numbers[0];
console.log(firstElement);

// Ex.#2
const last = numbers[numbers.length - 1];
console.log(last);

// Ex.#3
const fourthElement = numbers[3];
console.log(fourthElement);

// Ex.#4
const variable1 = numbers[1];
const variable2 = numbers[4];
const newArray = [variable1, variable2];
console.log(newArray); 

// Ex.#5
const lengthOfArray = numbers.length;
console.log(lengthOfArray);

// Ex.#6
numbers.push(8);
console.log(numbers);

// Ex.#7
numbers.unshift(0);
console.log(numbers); 

// Ex.#8
let removedLastElement = numbers.pop(last);
console.log(removedLastElement);

// Ex.#9
let removedFirstElement = numbers.shift();
console.log(removedFirstElement);

// Ex.#10
console.log(numbers);