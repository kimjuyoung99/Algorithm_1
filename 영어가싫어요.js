// https://school.programmers.co.kr/learn/courses/30/lessons/120894
function solution(numbers) {
    const numberWords = {
        'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
        'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
    };
    let result = numbers;
    
    for(let word in numberWords) {
        result = result.replaceAll(word,numberWords[word]);
    }
    
    return parseInt(result);
}