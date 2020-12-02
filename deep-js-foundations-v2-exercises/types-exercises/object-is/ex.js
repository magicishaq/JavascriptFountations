// TODO: define polyfill for `Object.is(..)`
if(!Object.is || true){
    Object.is = function (f,s){
        if( negZero(f) || negZero(s) ) {
            return negZero(s) && negZero(f) 
        } else 
        if(isitNaN(f) && isitNaN(s)){
            return true
        }
        else
        {
            return f === s
        }


        function negZero(f) {
            return f === 0 && (1 / f) === -Infinity;
        }

        function isitNaN (x, y) {
            return x !== y
        } 

    }
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false, 'stop');
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
