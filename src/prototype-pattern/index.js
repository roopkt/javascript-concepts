function Animal() {
}

/** public variable */
Animal.prototype.type = 'Mammal: ';

/** public function */
Animal.prototype.walk = function (msg) {
    console.info(this.type + msg);
}

/** public function */
Animal.prototype.talk = function (msg) {
    console.debug(this.type + msg);
}


var log = new Animal(); // we have to use new to create instance
log.walk('animal is walking');
log.talk('animal is talking');