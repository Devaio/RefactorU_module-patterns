var Repeater = (function(){
	var count = 0;

	//@param str     string
	//@param n       integer
	/*Takes a string and repeats it n number of times*/
	var repeatString = function repeatString(str, n) {
		var reString = ''
		for (var i = 0; i < n; i++) {
			reString += str
		};
		return reString
	}
	/* counts how many times it has been called and utilizes the above function to repeat strings that many times*/
	var repeatMore = function repeatMore(str){
		count++
		return repeatString(str, count)
	}

	//@param func    function
	//@param n       integer
	/*Takes a function and calls it n number of times*/
	var repeatFunction = function repeatFunction(func, n) {
		var reFunc;
		for (var i = 0; i < n; i++) {
			reFunc += func()
		};
		return reFunc
	}

	var repeatTwice = function repeatTwice(func) {
		var reFunc;
		for (var i = 0; i < 2; i++) {
			reFunc += func()
		};
		return reFunc
	}
	return {

	repeatString: repeatString,
	
	repeatFunction: repeatFunction,

	repeatMore: repeatMore,

	repeatTwice: repeatTwice
}
})();
