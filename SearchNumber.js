function searchEle(arr,ele) {


    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == ele) {
            console.log("Found")
            console.log(i)
        }
    }
}


searchEle([2,3,5.6],3)

