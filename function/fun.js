// 4.1
// function par(x,y){
//     if(arguments.length !=2){
//         throw("the number of parameters must be 2");
//     }else{
//         console.log("hello world");
//         }
// }
// console.log(par(1,2));
// console.log(par(1));
// console.log(par(1,2,5));


// // 4.2
// function addation(){
//     var total = 0;
//     for(var i=0;i<arguments.length;i++){
//     if(typeof arguments[i]!="number"){
//         throw("you must enter a numbers only");
//     }else{
//         total += arguments[i];
//     }
//     }
//     return total;
// }
// console.log(addation(2,2,"ahmed"));
// console.log(addation(2,2));


// // 4.3
function rev(){
    var reve=[];
    for (var i=0;i<arguments.length;i++){
        reve += arguments[i].split("").reverse().join("");
    }
    return reve;
}
console.log(rev("ahmed"));