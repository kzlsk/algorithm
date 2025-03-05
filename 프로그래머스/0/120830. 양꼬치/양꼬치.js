function solution(n, k) {
    let sum = 0;
    let free = 0;
    let juice = 0;
    let food = 0;
    if(n >= 10){
        free = ~~(n / 10) * 2000;
        food = n * 12000;
        juice = k * 2000;
        sum = (food + juice) - free;
    } else {
        food = n * 12000;
        juice = k * 2000;
        sum = food + juice;
    }
    return sum;
}