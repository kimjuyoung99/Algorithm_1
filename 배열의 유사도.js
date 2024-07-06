// https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution(s1, s2) {
    let answer = 0;
    
    s1.forEach(i => {
    if(s2.includes(i)) answer++;   })
    
    return answer;
}