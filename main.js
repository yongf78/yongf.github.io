// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

//document.querySelector('html').onclick = function(){
//    alert('stop poking me');
//}

/*
var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if( mySrc === '1.png'){
        myImage.setAttribute('src','hi.jpg');
    } else {
        myImage.setAttribute('src','1.png');
    }
}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick= function(){
    setUserName();
}