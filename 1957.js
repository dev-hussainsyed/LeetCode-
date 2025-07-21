// 1957. Delete Characters to Make Fancy String

// 1. Solution

function makeFancyString(s) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        const len = result.length;

        // Only add the current character if the last two are not equal to it
        
        if (len >= 2 && result[len - 1] === s[i] && result[len - 2] === s[i]) {
            continue;
        }

        result.push(s[i]);
    }

    return result.join('');
}


// 2. Test

console.log(makeFancyString("leeetcode"));  
// Output: "leetcode"

console.log(makeFancyString("aaabaaaa"));   
// Output: "aabaa"

console.log(makeFancyString("aab"));        
// Output: "aab"
