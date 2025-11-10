const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const words = input.slice(1);

const uniqueWords = [...new Set(words)];

uniqueWords.sort((a,b) => {
    if(a.length !== b.length){
        return a.length - b.length;
    }
    else {
        return a.localeCompare(b);
    }
});

console.log(uniqueWords.join('\n'));