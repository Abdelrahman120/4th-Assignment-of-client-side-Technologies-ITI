do {    
    var mixed=confirm("do you want to check your text mixed");
    if(mixed){
        var massage=new String(prompt("Please enter a the text").toUpperCase());
    }else{
        var massage=new String(prompt("Please enter a the text"));
    }
    var Values = massage.split('');
    var reversedValues = Values.reverse();
    var reverseString = reversedValues.join('');
}while (massage=="null"||massage =="" || !isNaN(massage) );
if (massage==reverseString) {
        alert("your text is palindrome")
    }else{
        alert("your text is not palindrome")
}