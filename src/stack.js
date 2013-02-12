// Note: don't use javascript's native array functions to do this.
var makeStack = function(){

  	var stack = {
  		//Don't access this
		values : [],



	    size : 0,

	    //puts a new element in the last position of stack
	    add : function(el){
			this.values[this.size] = el;
			this.size++;
			return el;
	    },

	    //gives you a copy of the last thing in stack, does not remove the last thing in stack
	    gimmeShit : function(){
	    	if (this.size === 0) {
	    		return "empty";
	    	};
	    	// Must be -1 because arrays start at 0, but size starts at 1
	    	return this.values[this.size - 1];
	    },

	    takeShit : function(){
	    	if (this.size === 0) {
	    		return "empty";
	    	};

	    	var returnedValue = this.values[--this.size];
	    	return returnedValue;
	    },









	};

	return stack;
}