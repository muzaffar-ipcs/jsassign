var test = " i m global"; //global variables

function testscope(){
	var test = "i m local"; //local variables
	console.log(test);
}

testscope(); //output local

console.log(test);//output global