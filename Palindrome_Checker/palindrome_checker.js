function palindrome(str) {
    // Cleaning the string
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Reverse the cleaned string
    let reversedString = str.split("").reverse().join("");
  
    // Checking if the reversed string is a palindrome
  
    if (str === reversedString) {
      return true;
    } else {
      return false;
    }
  }
  
  
palindrome("eye") //should return a boolean.
palindrome("eye") //should return true.
palindrome("_eye") //should return true.
palindrome("race car") //should return true.
palindrome("not a palindrome") //should return false.
palindrome("A man, a plan, a canal. Panama") //should return true.
palindrome("never odd or even") //should return true.
palindrome("nope") //should return false.
palindrome("almostomla") //should return false.
palindrome("My age is 0, 0 si ega ym.") //should return true.
palindrome("1 eye for of 1 eye.") //should return false.
palindrome("0_0 (: /-\ :) 0-0") //should return true.
palindrome("five|\_/|four") //should return false.