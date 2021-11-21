// Iterators
function fruitsIterators(values) {
    let nextIndex = 0;
    // We will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }

            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}
const myArray = ['Apples', 'Grapes', 'oranges', 'Mango'];
console.log("My array is ", myArray);

// Using the iterator
const fruits = fruitsIterators(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
