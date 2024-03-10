// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// _________________________________

function solution(numbers) {
    let sum = 0;
    for(i= 0 ; i < numbers.length ; i++){
        sum += numbers[i];
    }
    return sum/numbers.length;
}

// ---------

// i <= numbers.length 해서 틀림... 배열의 특성 잘 기억하기
// 그리고 let 자료형의 존재 잘 숙지하기. 
// 소숫점 자료형은 js에선 let!