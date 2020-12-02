// TODO: write `findAll(..)`

function findAll(match, arr) {
	var ret = [];
	for (var i = 0; i < arr.length; i++) {
		if (Object.is(match, arr[i])) {
			ret.push(arr[i]);
		} else if (match == null && arr[i] == null) {
			//nulls and undefined are safe here, catches undefined here
			ret.push(arr[i]);
		} else if (typeof match == 'boolean' && typeof v == 'boolean') {
			if (match == arr[i]) {
				ret.push(arr[i]);
			}
		} else if (typeof match == 'string' && match.trim() != '' && typeof arr[i] == 'number' && !Object.is(arr[i], -0)) {
			if (match == arr[i]) {
				ret.push(arr[i]);
			}
		} else if (typeof match == 'number' &&
		!Object.is(match, -0) &&
			!Object.is(match, NaN) &&
			!Object.is(match, Infinity) &&
			!Object.is(match, -Infinity) &&
			typeof arr[i] == 'string' &&
			arr[i].trim() != "") {
					if(match == arr[i]){
						ret.push(arr[i])
					}
		}
	}
	return ret;
}

// tests:
var myObj = {
	a: 2
};

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}