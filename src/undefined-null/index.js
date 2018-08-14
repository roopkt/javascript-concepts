
/**
In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:
 */

var TestVar;
console.log(TestVar); //shows undefined
console.log('typeof TestVar', typeof TestVar); //shows undefined
/**
null is an assignment value.It can be assigned to a variable as a representation of no value:
 */

var TestVar = null;
console.log('TestVar', TestVar); //shows null
console.log('typeof TestVar', typeof TestVar); //shows object

/**
From the preceding examples, it is clear that undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.
 */

console.log('null === undefined', null === undefined)// false
console.log('null == undefined', null == undefined)// true
console.log('null === null', null === null)// true

// and

// null = 'value' // ReferenceError
console.log('undefined = "value"', undefined = 'value') // 'value'