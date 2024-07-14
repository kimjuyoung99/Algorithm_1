// https://school.programmers.co.kr/learn/courses/30/lessons/120863
function solution(polynomial) {
    var answer = '';
    return answer;
}function solution(polynomial) {
    // 항을 분리
    const terms = polynomial.split(' + ');
    
    let xCoefficient = 0;
    let constant = 0;

    // 각 항을 순회하며 계수와 상수를 계산
    terms.forEach(term => {
        if (term.includes('x')) {
            // x항 처리
            const coefficient = term.replace('x', '') || '1';
            //** 이때 truthy에 대해서 꼭 알아여 한다~
            xCoefficient += parseInt(coefficient);
        } else {
            // 상수항 처리
            constant += parseInt(term);
        }
    });

    // 결과 문자열 생성
    let result = [];
    if (xCoefficient !== 0) {
        result.push(xCoefficient === 1 ? 'x' : `${xCoefficient}x`);
    }
    if (constant !== 0) {
        result.push(constant.toString());
    }

    // 빈 문자열 처리 (모든 항이 0인 경우)
    return result.length === 0 ? '0' : result.join(' + ');
}