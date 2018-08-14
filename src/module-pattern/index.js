function logger() {

    /** private variable */
    var version = 'Logger Version 2.3: ';

    /**
     * public functions
     */
    return {
        info: info,
        debug: debug
    }

    /** private function */
    function info(msg) {
        // public function is referening to debug private
        // function which has access to the private variable `version`.
        // This is the powerful pattern 
        console.info(version + msg);
    }

    /** private function */
    function debug(msg) {
        // public function is referening to debug private
        // function which has access to the private variable `version`.
        // This is the powerful pattern 
        console.debug(version + msg);
    }
}

var log = logger();
log.info('This is info message');
log.info('This is debug message');