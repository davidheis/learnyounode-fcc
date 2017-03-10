var numTotal = 0;

for (var i = 2; i < process.argv.length; i++ ) {
   numTotal += Number(process.argv[i]);
}

console.log(numTotal)