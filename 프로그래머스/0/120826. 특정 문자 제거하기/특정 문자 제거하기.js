function solution(my_string, letter) {
    // 문자열 => 배열
    answer = my_string.replaceAll(letter, '');
    return answer;
}