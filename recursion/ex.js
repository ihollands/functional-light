"use strict";

function isPalindrome(str) {
  var first = str[0],
      last = str[str.length - 1];
  if (str.length <= 1) return true;
  return first !== last ? false : isPalindrome(str.substring(1, str.length - 1));
}

console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
