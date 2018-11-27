import Navigation from './src/Footer';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

document.body.innerHTML += `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
`;

// console.log(Footer);

//var userName = prompt("What's your name?") || "Anonymous User";

var title = document.querySelector('h1');
document.querySelector('h1');

var greet = function greet(){
    if(!userName){
    userName = prompt("For real, what is your name?");
            greet();        
    }else{
    alert('hello ' + userName);
    title.textContent +=  ',' + userName;
    }
};
//greet();