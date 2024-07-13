// https://school.programmers.co.kr/learn/courses/30/lessons/120912
function solution(array) {
    let answer = 0;
    let array2= [];
    
    array.forEach(i => {
        array2.push(String(i).split('').map(Number));
    });
    
    array2 = array2.flat();
    array2.forEach( i => {
        if (i == 7) answer++;
    });
    
    return answer;
}
//1. 배열을 한개씩 쪼갠다.
//2. 한 배열을 split 으로 갈갈히 쪼갠다.
//3. 해당 문자가 7이면 result ++