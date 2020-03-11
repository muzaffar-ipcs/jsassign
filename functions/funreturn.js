
// example of  return 2 value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log("addition of 1+2 is " +result ); // 3




// example of return in a single function

function checkAge(age){
	if(age>=18){
		return true
	}
	else{
		return confirm('Do you have permission from your parents')
	}
}

let age = prompt('How old u r',18);

if(checkAge(age)){
	console.log('Access Granted');
}
else{
	console.log('Access Denied');
}