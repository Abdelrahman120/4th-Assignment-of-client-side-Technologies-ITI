var regexofName=/^[a-zA-Z]+$/;
do {
    var Name=new String(prompt("please enter your name"));
}while(Name == "null" || Name=="" || regexofName.test(Name)===false );

do {
    var phNum=new String(prompt("please enter your Phone Number"));
} while (phNum=="null"|| phNum=="" || phNum.length!=8);

do {
    var mobNum=new String(prompt("please enter your Phone mobNumber"));

} while (mobNum=="null"||mobNum=="" || mobNum.length!=11 || mobNum.startsWith("010")!=true || !mobNum.startsWith("011")!=true || !mobNum.startsWith("012")!=true );

var regexofEm=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
do {
    var email=new String(prompt("please enter your email"));

} while (email=="null"||email=="" || regexofEm.test(email)===false);

document.write("<P>your name is :"+Name+"</P><p>your email is :"+email+ "</p><p>your phone number is :"+phNum+"</p><p>your mobile phone  is :"+mobNum+"</p>");