const isPalindrome = function(s) {
    const normalized = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // removes all non-alpahenuemeric characters

    const stringReverse = normalized.split("").reverse().join("");
    return s == stringReverse;
  };
  
  module.exports = isPalindrome;