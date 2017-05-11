/*You are to write a function, `reverseString()`, that returns the reverse of the string argument provided. If the reverse of the string is the same as the original string, as in the case of palindromes, return `true` instead.*/

/*function name - reverseString() takes a word
loop through the word from the back
store each letter from the back to a new var till the end of the word
compare the new var to the original word
if they are the same, return true*/

function reverseString(word){
  var reverse = '';
  if (word === ''){
    return null;
  }
  for (var i = word.length-1; i >= 0; i--){
    reverse += word[i];
  }
  if (typeof word === null || typeof word === 'undefined'){
    return null;
  }
  if (word === reverse){
    return true;
  }
  else{
    return reverse;
  }
  //console.log(reverse);
}