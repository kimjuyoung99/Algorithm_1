function solution(array, n) {
    return array.reduce((closest, curr) => {
        console.log("closest : ", closest, "curr : ",curr);
        const currDiff = Math.abs(curr - n);
        const closestDiff = Math.abs(closest - n);
        if (currDiff < closestDiff || (currDiff === closestDiff && curr < closest)) {
            return curr;
        }
        return closest;
    });
}
//reduce 에 대해서 잘 알자..너무 어렵다...

// https://school.programmers.co.kr/learn/courses/30/lessons/120890