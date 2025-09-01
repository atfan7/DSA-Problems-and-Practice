function secondLargestNum(arr) {

    if (arr.length < 2) {
        return "Please input atleast two numbers to continue"
    }

    let firstLargest = -Infinity

    let secondLargest = -Infinity 

    for (let i = 0; i < arr.length; i++){

        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest=arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] != firstLargest ) {
            secondLargest=arr[i]
        }

    }
    return secondLargest

}

let arr = [3, 65, 87, 87, 4, 0, 36, 36];
let result = secondLargestNum(arr);

console.log(result);