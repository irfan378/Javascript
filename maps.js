// Maps in JavaScript
const myMap = new Map();
const key1 = 'mystr', key2 = {}, key3 = function () { };

// Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank');
myMap.set(key3, 'This is an empty function');

console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(key1);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// you can loop using for...of to get keys and values/
for (let [key, value] of myMap) {
    console.log(key, value);
}

// get only keys
for(let key of myMap.keys()){
    console.log('key is ',key);
}

// get only values
for(let value of myMap.values()){
    console.log('key is ',value);
}

// you can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log(key);
    console.log(value);
})

// converting mapkeys to an array
let myKeysArray=Array.from(myMap.keys());
console.log(myKeysArray);

// converting map values to an array
let myValuesArray=Array.from(myMap.values());
console.log(myValuesArray);

