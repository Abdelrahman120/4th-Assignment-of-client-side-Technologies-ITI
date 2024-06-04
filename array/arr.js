var array = [];
var sum=0;
var multiple=1;
var div=0;
do{
    for (var i=0;i<3;i++) {
    var num=prompt("please enter your number");
    if(isFinite(num)){
        array.push(Number(num));
        sum += array[i];
        multiple *= parseInt(array[i]);
        div =array[0]/array[1]/array[2];
    }}
}while (num ==null || num==""|| !Number(num));

document.write("<p>the sum of 3 values is "+"<span>"+array[0]+"+"+array[1]+"+"+array[2]+"="+sum+"</span>"+"</p>")
document.write("<p>the multiplication of 3 values is "+"<span>"+array[0]+"*"+array[1]+"*"+array[2]+"="+multiple+"</span>"+"</p>")
document.write("<p>the divition of 3 values is "+"<span>"+array[0]+"/"+array[1]+"/"+array[2]+"="+div+"</span>"+"</p>")
