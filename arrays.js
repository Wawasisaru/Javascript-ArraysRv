// Array methods
// .tostring() it retrns an array values with a seperated commas
let fruits = ["mango","banana","pears","apple"]
console.log(fruits.toString())
// .join()
// it return an new string by concatinating all the elements in an array seperated by a comma
let fruits1 = ["mango","banana","pears","apple"]
console.log(fruits1.join(":"))
// .pop 
// it removes the the last element of an array and returns the removed the elemnts
let fruits2 = ["mango","banana","pears","apple"]
console.log(fruits2.pop())
// .push
// it adds a new item to  the end of an array and it changes the length of an array
let fruits3 = ["mango","banana","pears","apple"]
console.log(fruits3.push("kiwi","orange"))
// .shift()
// remove the first element and retrns it
let fruits4 = ["mango","banana","pears","apple"]
console.log(fruits4.shift())
// .unshift()
// it adds a new element at the beinning and returns the length of the array
let fruits5 = ["mango","banana","pears","apple"]
console.log(fruits5.unshift("kiwi"))
// .delete
// array element can be deleted using javascript method
let fruits6 = ["mango","banana","pears","apple"]
delete fruits6 [3]
console.log(fruits6)
// concat
// it joins two or more elements, retrns new array after joining
let ary1 = [2,3,4]
let ary2 = [5,6,7]
let ary3 = [8,9,0]
let ary_new = ary1.concat(ary2,ary3)
console.log(ary_new)
// .sort()
// it sorts the elements of an array in aphlabetical and acsending order
let fruits7 = ["mango","banana","pears","apple"]
fruits7.sort()
console.log(fruits7)
// .splice
// it adds or removes an array elements 
let ary = [2,3,4,5,66,7,88]
ary.splice(77,89,"mama","dada")
console.log(ary)
// .slice()
// it slices out a piece of an array, it creates a new array
let arry = [2,3,4,5,66,7,88]
let rry = arry.slice(1,6)
console.log(rry)
// .reverse()
// it reverse the order of the elements in an array
let arry1 = [2,3,4,5,66,7,88]
arry1.reverse()
console.log(arry1)
// isArray()
// retrns true if the object if its an array otherwise fale

// indexOf
// methods return the first index of the specified value
let fruits8 = ["mango","banana","pears","apple"]
console.log(fruits8.indexOf("banana"))
// lasIndexOf
// returns the last index of the specified value 
let fruits9 = ["mango","banana","pears","apple"]
console.log(fruits9.lastIndexOf("banana"))