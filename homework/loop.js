//Ex1//
function text(name) {
    var newName = "";
    for (var i=0; i<name.length; i++) {   
        if (name[i] === "a") {
            newName += name[i].toUpperCase();
        } else {
            newName += name[i].toLowerCase();
        }
    }
​
    return newName;
}
  
console.log(text("JavaScript"));
  
// Ex2 //
function isPalindrome(word) {
    var upercaseWord = word.toUpperCase();
    var reverseWord = '';
​
    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord += upercaseWord[i];
    }
​
      if (upercaseWord === reverseWord) {
        return true;
    } else {
        return false;
    }
}
​
console.log(isPalindrome('abba'));
console.log(isPalindrome('Lusine'));
