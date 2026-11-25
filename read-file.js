const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('welcome.txt created');