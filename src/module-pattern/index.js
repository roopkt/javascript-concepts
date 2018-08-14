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
        console.info(version + msg);
    }

    /** private function */
    function debug(msg) {
        console.debug(version + msg);
    }
}

var log = logger();
log.info('This is info message');
log.info('This is debug message');