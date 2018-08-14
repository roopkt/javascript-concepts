/**
 * This Animal function is called as constructor function
 * Every constructor function is treaded as Class and 
 * can be written as Pascal Case. 
 */
function Animal() {

}

/** public variable */
Animal.prototype.type = 'Animal: ';

/** public function */
Animal.prototype.walk = function () {
    this.log(' is walking');
}

/** public function */
Animal.prototype.talk = function () {
    this.log(' is talking');
}

/** public function */
Animal.prototype.log = function (msg) {
    console.log(this.type + msg);
}

/**
 * In order to inherit Dog from Animal we will use prototype. 
 */
function Dog() {
    this.type = 'Dog'
}

/** Pointing Dog prototype to Animal Prototype hence creating an link for inheritance */
Dog.prototype = Animal.prototype;

Dog.prototype.swim = function () {
    this.log(' is swiming');
}

var dog = new Dog();
dog.swim();
dog.walk();
dog.talk();

