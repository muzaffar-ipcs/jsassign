
// example of  return 2 value
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log("addition of 1+2 is " +result ); // 3




// example of return in a single function

function checkAge(age){
	// using if else
	if(age>=18){
		return true
	}
	else{
		return confirm('Do you have permission from your parents')
	}
	
	// using ?
	// return (age>=18) ? true : confirm('Do you have permission from your parents');
	
	// using ||
	// return (age>=18)||confirm('Do you have permission from your parents')
}

let age = prompt('How old u r',18);

if(checkAge(age)){
	console.log('Access Granted');
}
else{
	console.log('Access Denied');
}


//least num example 1
function summin(a,b) {
	if(a>b){
		console.log(b);
	}
	else{
		console.log(a);
	}
}

summin(4,3);



//least num example 2
let a = prompt("1 enter no to find least no",'');
let b = prompt("2 enter no to find least no",'');
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(a,b));

