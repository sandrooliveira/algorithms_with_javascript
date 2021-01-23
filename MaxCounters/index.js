function solution(N, A) {
    let counters = Array(N).fill(0)
    let currentMaxValue = 0;
    let lastMaxValue = 0;

    A.forEach(index => {
        const indexToUpdate = index - 1;

        if (index > N) {
            lastMaxValue = currentMaxValue;
        } else {
            if(counters[indexToUpdate] < lastMaxValue) {
                counters[indexToUpdate] = lastMaxValue;
            }

            counters[indexToUpdate] = counters[indexToUpdate] + 1;  

            if(counters[indexToUpdate] > currentMaxValue) {
                currentMaxValue = counters[indexToUpdate];
            }
        }
    });

    return counters.map(counter => {
        return counter < lastMaxValue
           ? lastMaxValue
           : counter;
    });
}
