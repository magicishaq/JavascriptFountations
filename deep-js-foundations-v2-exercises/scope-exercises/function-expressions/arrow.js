
var printRecords = recordIds => {
    studentRecords.filter(record => recordIds.includes(record.id) )
    .sort((a,b) => a.name > b.name ? 1 : -1 )
    .forEach(record => console.log(`${record.name} ${record.id} :  ${record.paid? 'Paid' : 'Not Paid'}`) )
}

var paidStudentsToEnroll = () => {
    var arr = [...studentRecords]
    var currentE = [...currentEnrollment]
    return [...currentE,...arr.filter(record => record.paid == true && !currentE.includes(record.id) )
    .reduce((ids,object) => ids.concat(object.id))]
    
}

var remindUnpaid = (recordIds) => {
    var arr = [...studentRecords]
    return printRecord(arr.filter(record => !record.paid && recordIds.includes(record.id) )
    .reduce((current, object) => current.concat(object.id), []))
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
