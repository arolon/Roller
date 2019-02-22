
function count (str, char){
  var chars = str.split('');
  var cuenta = 0;
  var i = 0;

  while ( i < str.length ) {
    console.log(chars[i]);
    if ((chars[i]) == char){
      cuenta++
    }
    i++
  }
  return cuenta;
}

console.log("l esta en hello: " + count("Hello", 'l') + " veces");
console.log("g esta en hola: " + count("Hola", 'g') + " veces");

 function filter(array) {
  var newArray = [];
  var j = 0;

  for (i=0; i < array.length; i++){
    if ( array[i] > 10 ) {
      newArray[j] = array[i];
      j++;
    }
  }
  return newArray;
}

console.log("Here we'll see the result: " + filter([3, 5]));
console.log("Here we'll see the result: " + filter([3, 12, 45, 7]));
console.log("Here we'll see the result: " + filter([3, 12, 45, 7, 88, -1, 10, 11, 9]));

function hypotenuse (a, b){
  return Math.sqrt(a*a + b*b);
}

console.log("La hipotenusa de 3 y 4 es: " + hypotenuse(3,4));
console.log("La hipotenusa de 10 y 13 es: " + hypotenuse(10,13));
