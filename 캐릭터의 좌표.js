// https://school.programmers.co.kr/learn/courses/30/lessons/120861
function solution(keyinput, board) {
    let answer = [0,0];
    let maxX = Math.floor(board[0]/2), maxY = Math.floor(board[1]/2);

    keyinput.forEach(i => {
        if(i === "right" && answer[0] < maxX) answer[0]++;
        if(i === "left" && answer[0] > -maxX) answer[0]--;
        if(i === "up" && answer[1] < maxY) answer[1]++;
        if(i === "down" && answer[1] > -maxY) answer[1]--;
    });
    
    return answer;
}

//절댓값 Math.abs()
//개선된 코드
// function solution(keyinput, board) {
//     let x = 0, y = 0;
//     const [maxX, maxY] = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    
//     for (const move of keyinput) {
//         if (move === "right") x = Math.min(maxX, x + 1);
//         if (move === "left") x = Math.max(-maxX, x - 1);
//         if (move === "up") y = Math.min(maxY, y + 1);
//         if (move === "down") y = Math.max(-maxY, y - 1);
//     }
    
//     return [x, y];
// }
//아예 쌍으로 선언하고 return 할 수 있다