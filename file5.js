var x = process.argv[2];
var y = process.argv[3];
 
 if (x === y) {
 	console.log("They're equal!")
 }
 else {
 console.log(Math.max(x, y) + " is the bigger number.")
}