// https://school.programmers.co.kr/learn/courses/30/lessons/120866
function solution(board) {
    const n = board.length;
    const danger = JSON.parse(JSON.stringify(board)); // board의 깊은 복사

    // 8방향 탐색을 위한 dx, dy 배열
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (board[x][y] === 1) { // 지뢰가 있는 위치
                for (let i = 0; i < 8; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        danger[nx][ny] = 1; // 위험 지역 표시
                    }
                }
            }
        }
    }

    // 안전 지역 카운트
    let safeCount = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (danger[x][y] === 0) {
                safeCount++;
            }
        }
    }

    return safeCount;
}