function order (numbers) {
    let swapCount = 0;

    const swapValues = (origin, dest) => {
        let temp = numbers[origin];
        numbers[origin] = numbers[dest];
        numbers[dest] = temp
    }

    do {
        swapCount = 0;
        for(let i = 0; i < numbers.length - 1; i++) {
            const currentPosition = i
            const nextPosition = i + 1
            
            const current = numbers[currentPosition]
            const next = numbers[nextPosition]
            
            const currentIsOddAndNextIsEven = current % 2 !== 0 && next % 2 === 0
            const bothAreEvenButCurrentIsBigger = current % 2 === 0 && next % 2 === 0 && current > next
            const bothAreOddButNextIsBigger = current % 2 !== 0 && next % 2 !== 0 && next > current
            
            if(currentIsOddAndNextIsEven || bothAreEvenButCurrentIsBigger){
                swapValues(currentPosition, nextPosition)
                swapCount++
            }else if(bothAreOddButNextIsBigger) {
                swapValues(nextPosition, currentPosition)
                swapCount++
            }
        }  
    } while(swapCount > 0)

    return numbers;
}

const numbers = [1,2,5,4,7,2,4,7,10,23,77,123,5,13,8,12,5,5,5,3,1,3,5,8,1,2,3,4,8,4,7,5,8,10,25];

console.log(order(numbers))