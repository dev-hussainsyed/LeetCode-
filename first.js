function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters for a more robust check
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Examples
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("hello")); // false