// 문제 설명
// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

// 제한사항
// 1 ≤ n ≤ 10
// 입출력 예
// 입력 #1

// 3
// 출력 #1

// *
// **
// ***
// _____________

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const n = parseInt(line);
    
    for(let i = 1 ; i <= n ; i++){
        console.log('*'.repeat(i));
    }
    
    rl.close();
}).on('close', function () {
    process.exit();
});

// __________________________

// 후기 : 아니... 이런 형식이 갑자기 나와서 너무 당황했다... 난이도가 확 뛴 느낌...? 넘 어려우잉.. 코드를 좀 넓게 봐야겠다 
// / console.log('*'.repeat(i)); 에 대해서 알게 되었다. C와는 다르게 이중 반복문을 쓰지 않아도 될 것 같다