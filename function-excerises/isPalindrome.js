function isPalindrome(params) {
  return (
    params.toLowerCase.split("").reverse().join("") === params.toLowerCase()
  );
}
