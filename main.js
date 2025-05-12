//beginner level

//1
const evenOrOdd = (number) => number % 2 === 0 ? console.log("even") : console.log("odd")
evenOrOdd(5)

//2 sum of digits
function sumOfDigits(nums) {
    let def = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i] >= 0 ? (def += nums[i]) : (def -= nums[i])
    }
    return def
}

console.log(sumOfDigits([1, 2, 3, 4, 5, 6, 7, -10, -14]))

//3 reverse string

const reveresString = (string) => {
    let stReversed = ''
    for (let i = (string.length - 1); i > 0; i--) {
        stReversed += string[i]
    }
    return stReversed
}

console.log(reveresString('hello world'))


const reverseInAnotherWay = (string) => {
    return string.split("").reverse().join("")
}

console.log(reverseInAnotherWay("hello"))


//4 count letters in a string

const lettersCounter = (string) => {
    return string.replace(/\s/g, "").length
}
console.log(lettersCounter("hello world"))

//5 biggerNumberInAnArray

const biggerNumber = (arr) => {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i] > max ? max = arr[i] : max
    }
    return max
}


console.log(biggerNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))

//6 avg of array

const avg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(avg([1, 2, 3, 4, 5]))

//7 factorial with for loop

const fact = (n) => {
    let avg = 1;
    for (let i = n; i > 1; i--) {
        avg *= i
    }
    console.log(avg)
}

fact(5)

//fact with recusrion

const recursion = (n)=>{
    if(n === 0 || n === 1) return 1;
    return n * recursion(n - 1)
}

console.log(recursion(5))