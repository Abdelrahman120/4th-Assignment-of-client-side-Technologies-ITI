var area =0;
do {
    var radiusofC=prompt("what is the value of your circles radius?");
    area = 2*(Math.PI)*Number(radiusofC);
} while (radiusofC==null||radiusofC=="");

alert("Total area of circle is " + area);