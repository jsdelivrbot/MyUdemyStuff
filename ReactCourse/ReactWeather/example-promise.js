// // good ole callback pattern
// function getTempCallback(locaiton, callback) {
//     callback(undefined, 78);
//     callback('city not found');
// }

// getTempCallback('Detroit', function (error, temp) {
//     if (error) {
//         console.log('error', error);
//     } else {
//         console.log('success', temp);
//     }
// });

// // hmmm promises....
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('city not found');
//         }, 1000);
//     });
// }

// getTempPromise('detroit').then(function (temp) {
//     console.log('promise success', temp);
// }, function (error) {
//     console.log('promise error', error);
// });


// Challenge area
function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject('one of these was not a number');
        }
    });
}

addPromise(1, 2).then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});

addPromise('wat', 2).then(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
});