function printRecords(recordIds) {
	// TODOa
	var theStudents = studentRecords.filter(function getIds (record) {
	    return recordIds.includes(record.id)
	})
	theStudents = theStudents.sort(function sortByName (a, b) {
		return a.name > b.name ? 1 : -1
	})

    theStudents.forEach(function printToConsole(record) {
        console.log(`${record.name} ${record.id} :  ${record.paid? 'Paid' : 'Not Paid'}`); 
    })
// 	return theStudents; 
}

function paidStudentsToEnroll() {
var arr = [...studentRecords];
var currentE = [...currentEnrollment]; 
var paidButNotEnrolled = arr.filter(function getPaidButNotEnrolled (record) {
    return record.paid == true && !currentE.includes(record.id)
})


var paidIds = paidButNotEnrolled.reduce(function getTheIds (ids, object){
    return ids.concat(object.id) 
}, [])
return [...paidIds,...currentE]; 

}

function remindUnpaid(recordIds) {
    var arr = [...studentRecords]
    var unpaid = arr.filter(function getUpaid (record) {
        return !record.paid && recordIds.includes(record.id) 
    })
    var unpaidIDs = unpaid.reduce(function getUnpaidId(current, object) {
        return current.concat(object.id)
    }, [])
    printRecords(unpaidIDs); 
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
