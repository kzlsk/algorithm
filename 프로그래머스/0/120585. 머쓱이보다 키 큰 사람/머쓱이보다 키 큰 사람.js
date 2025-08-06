function solution(array, height) {
    let sum = 0;
    array.forEach((v) => {
        if(v > height) sum += 1;
    });
    return sum;
}