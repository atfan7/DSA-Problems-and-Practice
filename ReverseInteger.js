//Reverse Integer



function Reverse(n) {

  
    let nCopy = n;

    n = Math.abs(n);

    let reverse = 0;


    while (n > 0) {

        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);

    }

    let limit = Math.pow(2, 31);

    if (reverse < -limit || reverse > limit) {
        return 0
    }


    //if original was negative
    return (nCopy < 0) ? -reverse : reverse;
}

let num = -98;

let result = Reverse(num);

console.log(result)