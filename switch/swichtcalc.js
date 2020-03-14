// let a = 2 + 2;
let a = Number(prompt("Enter first Number "));
let arg = prompt("operator? type + - * / ");
let b = Number(prompt("Enter Second Number "));
let c ;
alert(typeof arg);
switch (arg) {
	
  case '+' :
	// c = a+b;
	console.log("Addition for "+a+" + "+b+" is " +(a+b));
    break;
	
  case '-' :
	c = a-b;
	console.log("Substraction for "+a+" - "+b+" is "+c);
    break;
	
  case '*' :
	c = a*b;
	console.log("Multiplication for "+a+" * "+b+" is "+c);
    break;

  case '/' :
	c = a/b;
	console.log("Multiplication for "+a+" / "+b+" is "+c);
    break;
	
  default:
    alert( "I don't know such values / Operator" );
}