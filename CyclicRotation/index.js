function solution(a, k) {
    const arraySize = a.length;
    const newArray = [];
    
    a.forEach((item, index) => {
      const newIndex = index + k;
      const newIndexTransformed = newIndex % arraySize;
      
      newArray[newIndexTransformed] = item;
    })
    
    return newArray;
  }