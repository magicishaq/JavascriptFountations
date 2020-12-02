// TODO: write the validation functions

function isValidName(string) {
    if(typeof string == 'string' && string.length > 0){
        var whiteSpace = string.split('').filter(elm => elm !== ' ' )
        return whiteSpace.length >= 3 ; 
    }else{
        return false
    }
}

function hoursAttended (attended, length) {
if(typeof attended == 'boolean' || typeof length == 'boolean' || length == null || length == undefined || attended == null || length == undefined ){
    return false
}

    if(Number(attended) && Number(length)) {
        attended = Number(attended); 
        length = Number(length)
        if(Number.isInteger(attended) && Number.isInteger(length) && attended <= length) {
            return true
        }
    }else{
        return false
    }
}

// tests:


console.log(isValidName("Frank") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);


console.log('hoursAttended')
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true); 
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
console.log('end')
