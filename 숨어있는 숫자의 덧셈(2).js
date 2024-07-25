// https://school.programmers.co.kr/learn/courses/30/lessons/120864
function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    if(!numbers) return 0;
    const answer = numbers.reduce((a,b)=> a + parseInt(b),0);
    return answer;
}
// \d: 모든 숫자와 일치
// +: 하나 이상의 연속된 숫자와 일치
// g: 전역 검색 (문자열 전체에서 모든 일치 항목을 찾음)