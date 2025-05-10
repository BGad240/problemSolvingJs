const evenOrOdd = (number) => number % 2 === 0 ? console.log("even") : console.log("odd")
evenOrOdd(5)

function sumOfDigits(nums) {
    let def = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] >= 0 ? (def += nums[i]) : (def -= nums[i])
    }
    return def
}




console.log(sumOfDigits([1, 2, 3, 4, 5, 6, 7, -10, -14]))
