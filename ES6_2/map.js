/**
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. 
 * Any value (both objects and primitive values) may be used as either a key or a value.
 */
 const map1 = new Map();

 map1.set('a', 1);
 map1.set('b', 2);
 map1.set('c', 3);
 
 console.log(map1.get('a'));
 // expected output: 1
 
 map1.set('a', 97);
 
 console.log(map1.get('a'));
 // expected output: 97
 
 console.log(map1.size);
 // expected output: 3
 
 map1.delete('b');
 
 console.log(map1.size);
 // expected output: 2

 
 ///The correct usage for storing data in the Map is through the set(key, value) method.

 const contacts = new Map()
 contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
 contacts.has('Jessie') // true
 contacts.get('Hilary') // undefined
 contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
 contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
 contacts.delete('Raymond') // false
 contacts.delete('Jessie') // true
 console.log(contacts.size) // 1

 ///Using the Map object

 const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get('a string')); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function() {})); // undefined, because keyFunc !== function () {}


///Using NaN as Map keys
const myMap = new Map();
myMap.set(NaN, 'not a number');

myMap.get(NaN);
// "not a number"

const otherNaN = Number('foo');
myMap.get(otherNaN);
// "not a number"


///Iterating Map with for...of
const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one


///Iterating Map with forEach()
myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
  // 0 = zero
  // 1 = one

  
  ///Relation with Array objects
  const kvArray = [['key1', 'value1'], ['key2', 'value2']];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const myMap = new Map(kvArray);

console.log(myMap.get('key1')); // "value1"

// Use Array.from() to transform a map into a 2D key-value Array
console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray

// A succinct way to do the same, using the spread syntax
console.log([...myMap]);

// Or use the keys() or values() iterators, and convert them to an array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]



///Cloning and merging Maps
const original = new Map([
    [1, 'one'],
  ]);
  
  const clone = new Map(original);
  
  console.log(clone.get(1)); // one
  console.log(original === clone); // false (useful for shallow comparison)

  ///Maps can be merged, maintaining key uniqueness:

  const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  const merged = new Map([...first, ...second]);
  
  console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three

  ///Maps can be merged with Arrays, too:

  const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  const second = new Map([
    [1, 'uno'],
    [2, 'dos'],
  ]);
  
  // Merge maps with an array. The last repeated key wins.
  const merged = new Map([...first, ...second, [1, 'eins']]);
  
  console.log(merged.get(1)); // eins
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three
  