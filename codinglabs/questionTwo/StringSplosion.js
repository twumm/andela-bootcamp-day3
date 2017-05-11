/*You are to implement a `StringSplosion` class whose constructor accepts a string argument. 
Your class should contain a `manipulate()` method.
When an instance of this class invokes the `manipulate()` method, it returns the _sploded_ version of the string argument, based the following pattern:  
`phone`   returns `pphphophonphone`
`ab`      returns `aab`
`like`    returns `lliliklike`*/

/*class StringSplosion class accepts a StringSplosion
class should contain a manipulate() method which return a _sploded_ version of string passed in the order below:
less than or equal to 2 letters
first letter twice
second letter once

if more than 2 letters
first letter twice
second letter once
then add
first 3 letters
then add
first 4 letters
then add first 5 letters
*/

function StringSplosion(word) {
  this.word = word;
}

StringSplosion.prototype.manipulate = function (){
  var _sploded_ = '';
  for (i = 0; i < this.word.length; i++){
    _sploded_ += this.word.substring(0, i+1);
  }
  return _sploded_;
};