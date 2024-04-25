function solution(i, j, k) {
    let count = 0;
    for(let num = i ; num <= j ; num++ ){
        count+=String(num).split('').filter(char => char === String(k)).length;
    }
    
    return count;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120887