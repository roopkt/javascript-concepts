/*
In Javascript inner function has access to the outer functions variables and arguments is called as closure. 
Inner function scope has 3 access.
  1. Access to its local scope variables
  2. Access to global scope variables
  3. Access to its outer function variables and args. 
*/

/* Here is an example 
Even though inner function printVersion has returned its value. 
It has access to its outer function variable 'version' and argument 'logger'
*/

function setLogger( logger ) {
    var version  = 23; 
    return function printVersion() {
      var prefix = 'Logger Version: ';
      logger(prefix+ version);
    }
  } 
  
  
  setLogger(console.debug)(); // print message Logger Version: 23 in debug mode
  setLogger(console.info)(); // print message Logger Version: 23 in info mode.