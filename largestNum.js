function largestNum(arr) {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}


const largestNo = largestNum([40, 5, 0, 2, 90])

console.log(largestNo)