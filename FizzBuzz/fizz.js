//imprime 100 numeros y los divide en 3 y 5, si es divisible por 3 escribe fizz y si es divisible por 5 escribe buzz
var numeros = 100;
for(var i=1; i<=100; i++){

  if(esDivisible(i, 3)){
    document.write(" Fizz  ");
  }
  if(esDivisible(i, 5)){
    document.write(" Buzz  ");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5)) {
    document.write(i);
  }
  document.write("<br/>");
}

function esDivisible(num, divisor){
  if(num % divisor == 0){
    return true;
  }
  else{
    return false;
  }
}
