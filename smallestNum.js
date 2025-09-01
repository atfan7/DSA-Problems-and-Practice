function smallestNum(arr) {
    let smallest = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}


const smallestNo = smallestNum([40, 5, 10, 2, 90])

console.log(smallestNo)