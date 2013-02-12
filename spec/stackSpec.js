describe("stack", function() {
	var stack;

	beforeEach(function() {
		stack = makeStack();
	});


	// Tests for stack.add
	it("add should have a method named 'add'", function() {
		expect(stack.add).toEqual(jasmine.any(Function));
	});


	it("add should take an argument", function() {
		expect(stack.add('zounds')).toEqual('zounds');
	});

	it("add should increment the size by one", function() {
		expect(stack.size).toEqual(0);
		stack.add("zoink")
		expect(stack.size).toEqual(1);
	});

	it("the added element should be persisted in the stack", function() {
		stack.add("zounds");
		// Change this test to not depend on checking values[]
		expect(stack.takeShit()).toEqual("zounds");
	});


	// Tests for stack.gimmeShit
	it("if stack is empty, gimmieShit should return 'empty' ", function() {
	    expect(stack.gimmeShit()).toEqual("empty");
	});

	it("gimmeShit should return the most recently added element", function() {
	    stack.add("zounds");
		expect(stack.gimmeShit()).toEqual("zounds");
	});

	// Tests for stack.takeShit
	it("should return the last element and remove it from the stack", function() {
	    /* IS THERE A MORE SUCCINCT WAY TO WRITE THIS WHY AM I YELLING */
	    stack.add("zounds");
	    var takenShit = stack.takeShit();
		expect(stack.size).toEqual(0);
		expect(takenShit).toEqual("zounds");
	});

	// Tests for stack.removeShit

});