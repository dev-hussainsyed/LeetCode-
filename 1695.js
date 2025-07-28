// 1695. Maximum Erasure Value

// 1. Solution

var maximumUniqueSubarray = function(nums) {
    // Create a set to track unique elements in the current subarray
    let seen = new Set();
    let left = 0; // Pointer for the left side of the window
    let currentSum = 0; // Sum of the current subarray
    let maxSum = 0; // Variable to store the maximum sum

    // Loop through the array with the right pointer
    for (let right = 0; right < nums.length; right++) {
        // While we encounter a duplicate element, remove elements from the left side
        // of the window and update the sum
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            currentSum -= nums[left];
            left++;
        }

        // Add the current element to the set and update the sum
        seen.add(nums[right]);
        currentSum += nums[right];

        // Update the maximum sum found so far
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};


// 2. Test 

const nums = [5,2,1,2,5,2,1,2,5];

console.log(maximumUniqueSubarray(nums));