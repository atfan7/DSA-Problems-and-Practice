function NegativeEleCount(arr) {
    let count = 0;



    for (let i = 0; i < arr.length; i++)
    {


         if (arr[i] < 0) {

            count = count + 1;

        }

        else return ("No Negative Numbers in the array")
    }
    return count
}


const counter = NegativeEleCount([1, 2, 3, 1, 7])

console.log(counter)