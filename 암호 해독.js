function solution(cipher, code) {
    var answer = '';
    for(let i = code-1 ; i < cipher.length ; i+=code){
        answer += cipher[i];
    }
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120892