/**
 * Function to find the kth largest element in an array.
 * @param {number[]} nums - The array of integers.
 * @param {number} k - The kth position.
 * @returns {number} - The kth largest element in the array.
 */
function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
  }
  
  /**
   * Helper function to perform the Quickselect algorithm.
   * @param {number[]} nums - The array of integers.
   * @param {number} left - The left index.
   * @param {number} right - The right index.
   * @param {number} k - The kth index to find.
   * @returns {number} - The kth largest element.
   */
  function quickSelect(nums, left, right, k) {
    if (left === right) {
      return nums[left];
    }
  
    let pivotIndex = partition(nums, left, right);
  
    if (k === pivotIndex) {
      return nums[k];
    } else if (k < pivotIndex) {
      return quickSelect(nums, left, pivotIndex - 1, k);
    } else {
      return quickSelect(nums, pivotIndex + 1, right, k);
    }
  }
  
  /**
   * Helper function to partition the array around a pivot.
   * @param {number[]} nums - The array of integers.
   * @param {number} left - The left index.
   * @param {number} right - The right index.
   * @returns {number} - The pivot index.
   */
  function partition(nums, left, right) {
    let pivot = nums[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (nums[j] <= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }
  
  // Example usage:
  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
  console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
/**
 * Why Quickselect?
 * 
 * Time Complexity: The average time complexity of Quickselect is O(n). However, in the worst case, it can go up to O(n^2). To avoid the worst-case scenario, we can choose a random pivot.
 * 
 * Space Complexity: Quickselect has a space complexity of O(1) because it sorts in place.
 * 
 */