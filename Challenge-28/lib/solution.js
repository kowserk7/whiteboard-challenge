'use strict';

const solution = module.exports = {};
solution.highestScore = function(string){
  var words = string.split(' '),
    max = 0,
    highest = '';
  for(let i = 0; i < words.length; i++){
    var s = words[i],
      value = 0;
    for(let j = 0; j < s.length; j++){
      value += (s.charCodeAt(j) - 96);
    }
    if(value > max){
      max = value;
      highest = s;
    }
  }
  return highest;
};
