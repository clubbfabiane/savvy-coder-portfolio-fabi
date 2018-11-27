

export default function greet(){
    if(!userName){
    userName = prompt("For real, what is your name?");
            greet();        
    }else{
    alert('hello ' + userName);
    title.textContent +=  ',' + userName;
    }
};
//greet();