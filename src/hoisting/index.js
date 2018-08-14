
var x = 5;
function print() {
  if(x==5) {
    var x = 6;
    alert(x);
  } else {
    x = 7;
    alert(x); 
  }
}

/**
Here line number 4 x is declared and initialized.
Therefore, x will be moved at the top of the function
it will  move to line number 3 and initizlie x with undefinied. 
var x = 5;
function() {
    var x;
    if(x==5) {
      x = 6;
      alert(x);
    } else {
    x = 7;
    alert(x); 
  }
}
therefore after calling this function it will alert 7 only. 
*/