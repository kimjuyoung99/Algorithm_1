// https://school.programmers.co.kr/learn/courses/30/lessons/120895
function solution(my_string, num1, num2) {
    let strArray = my_string.split('');

    [strArray[num1], strArray[num2]] = [strArray[num2], strArray[num1]];
        
    return strArray.join('');
}