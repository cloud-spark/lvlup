function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("abc"))
console.log(isPalindrome("abcba"))


str = "gradwohl"

for (let char of str) {
  console.log(char)
}

slice = str.slice(0, 4)
console.log(slice)

