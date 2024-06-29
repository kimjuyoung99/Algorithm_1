// https://school.programmers.co.kr/learn/courses/30/lessons/120896
function solution(s) {
    var answer = '';
    const charCount = {};
    
    for(let char of s){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    //한 번만 등장하는 문자들 배열에 저장
    const uniqueChars = Object.keys(charCount).filter(char => charCount[char] === 1);
    //배열을 사전순으로 정렬하고 하나의 문자열로 결합
    return uniqueChars.sort().join('');
    
    return answer;
}