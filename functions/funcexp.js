let sayHi1 = function() {
  console.log( "Hello 1" );
};
sayHi1();


//example 2
function sayHi() {   // (1) create
  console.log( "Hello 2" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello