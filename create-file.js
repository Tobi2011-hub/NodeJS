const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Could not read file:', err.message);
    return;
  }
  console.log(data);
});