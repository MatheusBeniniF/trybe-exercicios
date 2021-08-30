function biggest(numbers) {
    let biggestIndex = 0;
    for (let index in numbers) {
        if (numbers[biggestIndex] < numbers[index]){
            biggestIndex = index;
        }
    }
    return biggestIndex;
}
console.log(biggest([2,3,6,7,10,1]));

