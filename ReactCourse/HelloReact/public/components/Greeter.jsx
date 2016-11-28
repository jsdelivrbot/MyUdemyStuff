function greeter () {
    document.write('from greeter function');
}

// by settings exports we allow anyone
// who requires this file access to the
// greeter function.
module.exports = greeter;