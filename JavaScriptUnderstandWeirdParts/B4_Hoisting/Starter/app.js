function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i); // i is aka a free variable
            }
        );
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// returns all 3s wat!
// the reason this gets weird is that
// console.log does not run in the arr.push().
// and i = 3 because of the increments in the loop
// so the leftover variable in the closure is i = 3
// so now when each function is called they all see i === 3




function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j = i; 
        arr.push(
            function() {
                console.log(j);
            }
        );
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// or with es5

function buildFunctions3() {
    var arr = [];

    for (var i = 0; i < 3; i++){
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                };
            })(i)
        );
    }
    return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();