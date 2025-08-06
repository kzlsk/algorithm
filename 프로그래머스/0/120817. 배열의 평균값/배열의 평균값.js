function solution(numbers) {
    var answer = 0;
    let sum = 0;
    numbers.forEach(function (number){
        sum += number;
    });
    answer = sum / numbers.length;
    return answer;
}