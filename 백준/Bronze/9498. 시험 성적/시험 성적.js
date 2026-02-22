let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const score = input[0];
switch(true){
        case(score >= 90):
            console.log('A')
            break;
        case(score >= 80):
            console.log('B')
            break;
        case(score >= 70):
            console.log('C')
            break;
        case(score >= 60):
            console.log('D')
            break;
        default:
            console.log('F')
            break;
}

