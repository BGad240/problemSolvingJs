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

const recursion = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * recursion(n - 1)
}

console.log(recursion(5))


//8 Anagram

const isAnagram = (str, str1) => {
    return str.split("").sort().join() === str1.split("").sort().join() ? true : false
}

console.log(isAnagram('ollehh', 'hello'))


//9 flatten

// let arr = [1,2,3,[4,5]]

const flatten = (arr) => {
    let demoArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                demoArr.push(arr[i][j]);
            }
        } else {
            demoArr.push(arr[i]);
        }
    }
    return demoArr;
}

console.log(flatten([1, 2, 3, [4, 5]]))





//9 fizzBuzz


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        const fizz = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
            (i % 3 === 0 && i % 5 !== 0) ? "Fizz" :
                (i % 3 !== 0 && i % 5 === 0) ? "Buzz" : i;
        console.log(fizz);
    }
}
//this is fizzBuzz 

fizzBuzz(10)


//10 stringy fizzBuzz

function tiyFizzBuzz(sentence) {
    let regexCons = /[BCDFGHJKLMNPQRSTVWXYZ]/
    let regexVowel = /[AEIOU]/
    let smallRegexVowel = /[aeiou]/
    let newString = ""
    sentence.split("").map(str => {
        if (regexVowel.test(str)) {
            newString += "Iron Yard"
        } else if (smallRegexVowel.test(str)) {
            newString += "Yard"
        } else if (regexCons.test(str)) {
            newString += "Iron"
        } else {
            newString += str
        }
    })
    return newString
}


console.log(tiyFizzBuzz("helloThere"))



//11 create anagram


function createAnagram(s, t) {

    const countS = {};
    const countT = {};
    const len = s.length;


    for (let i = 0; i < len; i++) {
        const charS = s[i];
        const charT = t[i];
        countS[charS] = (countS[charS] || 0) + 1;
        countT[charT] = (countT[charT] || 0) + 1;
    }

    let operations = 0;


    for (const char in countS) {
        if (countS[char] > (countT[char] || 0)) {
            operations += countS[char] - (countT[char] || 0);
        }
    }

    return operations;
   }



//12-BanjoPlay

function areYouPlayingBanjo(name) {
    let regex = /^[Rr]/
    let truthyRes = regex.test(name)
    truthyRes ? (name += " plays banjo") : (name += " does not play banjo")
    return name;
  }




//13-Find the First Non-Repeating Character


function firstNonRepeatingChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("aabbcde")); 



//14-Group Anagram

function groupAnagrams(words) {
    let map = {};

    for (let word of words) {
        let sorted = word.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(word);
    }

    return Object.values(map);
}


console.log(groupAnagrams(["bat", "tab", "tap", "pat", "cat"]));


  

