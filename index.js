var userName = prompt("What's your name?");
var greet = function greet(){
    if(!userName){
    userName = prompt("For real, what is your name?");
            greet();        
    }else{
    alert('hello ' + userName);
    }
};
greet();