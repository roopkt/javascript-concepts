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

samsung.install.call(iphone); // what would be output ? 

/**
 * Since install method is called by passing the iphone instance. 
 * `this` will point to the iphone instance and the `store` value
 * will be read from the iphone instance only. 
 * Therefore, the output will be:
 * `installing app from Apple Store`
 * */
