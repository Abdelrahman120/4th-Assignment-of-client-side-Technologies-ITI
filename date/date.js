var days=["Satrday","Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday"];
function date(data){
    if(typeof data=="string"){
        var date=new Date(data);
        var day=date.getDay();
    }else{
        throw("the date must be a string");
    }
    return ("the day is "+days[day+1]);
}

console.log(date("5-22-2024"));