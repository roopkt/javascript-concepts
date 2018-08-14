function Samsung() {
  this.store = "Google Play";
  this.install = function () {
      console.log('installing app from ' + this.store); // here this is pointing to what ? 
  }
}

function IPhone() {
  this.store = "Apple Store";
  this.install = function () {
      console.log('installing app from ' + this.store);// here this is pointing to what ? 
  }
}

var samsung = new Samsung();
var iphone = new IPhone(); 

/** 
* At this point we are not calling samsung install function
* rather we are just binding the context of samsung to iphone
* Hence returning new function whose `this` is pointing to the iphone.
* Therefore, when we call install function it will point to iphone instance 
* Therefore, the output will be:
* `installing app from Apple Store`
**/
var  install  = samsung.install.bind(iphone);  

install() // what would be the output ? 
 
