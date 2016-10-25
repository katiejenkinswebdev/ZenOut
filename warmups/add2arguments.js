// Define a JavaScript function add that can be used like so:
//this is called currying

add(1)(1);   // returns 2
add(20)(20); // returns 40

function add(x) {
  return function sum(y){
    return x + y;
  }
}

add(1)(1);
