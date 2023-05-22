// функция проверки палиндрома
function isPalindrome(str) {
  return str === str.split('').reverse().join('') ? true : false
}

