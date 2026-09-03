function findOccurance(numbers, k) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === k) {
            count++;
        }
    }
    console.log(count);
}
const numbers = [2,4,5,2,1,2];
const k = 2;
findOccurance(numbers, k);

