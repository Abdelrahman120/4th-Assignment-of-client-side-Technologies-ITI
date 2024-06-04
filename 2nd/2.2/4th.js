var squareRoot =0;
do {
    var num=prompt("what is the value you want to calculate its squre root ?");
    squareRoot = Math.sqrt(num);
} while (num==null||num=="");

alert("square root of "+num+" is " + squareRoot);