/*D5 ★★ Muraho Kigali. Print the numbers 1 to 15. For multiples of 3 print "Muraho", for
multiples of 5 print "Kigali", and for multiples of both print "Muraho Kigali". Think about
which condition must be checked first*/

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Muraho Kigali");
  } else if (i % 3 === 0) {
    console.log("Muraho");
  } else if (i % 5 === 0) {
    console.log("Kigali");
  } else {
    console.log(i);
  }
}