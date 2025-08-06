function solution(num_list) {
    var answer = [
        num_list.filter(v => v % 2 === 0).length,
        num_list.filter(v => v % 2 !== 0).length
    ];
    return answer;
}