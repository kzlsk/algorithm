function solution(n) {
   return Array.from(String(n), Number).reverse();
}

// String(n) : 숫자를 문자열로 변환
// Array.from(문자열, Number) : 문자열을 배열로 만들면서 각 문자 숫자로 변환
// reverse() : 배열 뒤집기