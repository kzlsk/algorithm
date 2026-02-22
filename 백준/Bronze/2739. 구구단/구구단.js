let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const n = input[0];

for (i = 1; i < 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
