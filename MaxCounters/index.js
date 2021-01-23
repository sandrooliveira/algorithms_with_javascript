function solution(N, A) {
    let counters = Array(N).fill(0)

    A.forEach(index => {
        const indexToUpdate = index - 1;

        if(index > N) {
            const maxValue = Math.max(...counters);
            counters = counters.map(counter => maxValue)
            return;
        }

        counters[indexToUpdate] = counters[indexToUpdate] + 1;   
    });

    return counters;
}