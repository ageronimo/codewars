// take numbers in array and add them up
// assume array is all numbers

let set = [1,2,3,4];

function sum(arr) {
	// console.log(arr.reduce(function (total, num) { 
	// 	return total + num ;}, 0)
	// );
	
	if (arr.length === 0) {
		return 0;
	} else {
		return arr.reduce(function(total, num){ return total + num; }, 0);
	}
}

sum(set);