/**
 * Function to merge two sorted arrays into one sorted array in place.
 * @param {number[]} nums1 - The first sorted array with extra space at the end.
 * @param {number} m - The number of elements in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in nums2.
 */
function merge(nums1, m, nums2, n) {
    let i = m - 1; // Last index of the first part of nums1
    let j = n - 1; // Last index of nums2
    let k = m + n - 1; // Last index of the merged array
  
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k--] = nums1[i--];
      } else {
        nums1[k--] = nums2[j--];
      }
    }
  
    while (j >= 0) {
      nums1[k--] = nums2[j--];
    }
  }
  
  // Example usage:
  let nums1 = [1, 2, 3, 0, 0, 0];
  merge(nums1, 3, [2, 5, 6], 3);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
  
  let nums2 = [1];
  merge(nums2, 1, [], 0);
  console.log(nums2); // Output: [1]
  
  let nums3 = [0];
  merge(nums3, 0, [1], 1);
  console.log(nums3); // Output: [1]

/**
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */