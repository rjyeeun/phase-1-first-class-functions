function receivesAFunction(callback) {
    callback()
}

let hello = 0
function returnsANamedFunction() {
    return function () {}
}


function returnsANamedFunction() {
    return function namedFunction() {}
}

function returnsAnAnonymousFunction() {
    return function () {}
}