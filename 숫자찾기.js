// https://school.programmers.co.kr/learn/courses/30/lessons/120904
function solution(num, k) {
    let numStr = num.toString();
    let position = numStr.indexOf(k.toString());
    
    return ( position !== -1 ) ? position+1 : -1;
}