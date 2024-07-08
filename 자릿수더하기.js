// https://school.programmers.co.kr/learn/courses/30/lessons/120906
function solution(n) {
    let answer= 0;

    let arr = n.toString().split('');
    
    arr.forEach(i => {
        let num = parseInt(i);
        answer+=num;}
    )
    
    
    return answer;
}