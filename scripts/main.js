var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../rottweiler-puppy2.jpg') {
      myImage.setAttribute ('src','../rottweiler-puppy.jpg');
    } else {
      myImage.setAttribute ('src','../rottweiler-puppy2.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Puppies are cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Puppies are cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
