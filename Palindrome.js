//Palindrome Number

function Palindrome(n) {

    if (n < 0) return false;
    let nCopy = n;

    let reverse = 0;
    

    while (n > 0) {

        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
        
    }
    return nCopy === reverse;
}

let num = 121;

let result = Palindrome(num);

console.log(result)