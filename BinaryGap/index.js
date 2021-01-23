function solution(N) {
    const binary = (N >>> 0).toString(2);
    let gap = 0;
    let longestGap = 0;

    for(let i = 0; i < binary.length; i++){
        if (binary[i] === "0") {
           gap = gap + 1; 
        } else {
            if(gap > longestGap) {
                longestGap = gap;
            }
            gap = 0;
        }
    }

    return longestGap;
}