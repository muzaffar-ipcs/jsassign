let a = prompt('First Number',);
let b = prompt('Second Number',);

n = Number(a);
m = Number(b);

console.log("First Number is "+a);
console.log("Second Number is "+b);

function add(n, m) {
	
  return n + m;
}

function sub(n, m) {
	
  return n - m;
}

function mul(n, m) {
	
  return n * m;
}

function div(n, m) {
	
  return n / m;
}


console.log("Addition for "+a+" + "+b+" is " +add(n,m) );
console.log("Substraction for "+a+" - "+b+" is " +sub(n,m) );
console.log("Multiplication for "+a+" * "+b+" is " +mul(n,m) );
console.log("Division for "+a+" / "+b+" is "+div(n,m) );


