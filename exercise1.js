/*A3 ★ Concatenation and template literals. With const first = "Eric" and const
marks = 82 , print Eric got 82 marks twice: once with + , once with a template literal
( `${...}` ).*/
 
const first = "Eric";
const marks = 82;

console.log(first + " got " + marks + " marks");
console.log(`${first} got ${marks} marks`);