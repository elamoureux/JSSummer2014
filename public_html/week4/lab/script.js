/* 
 *We need to collect some data from the user. 
 *Please collect the following data. User input from email field 
 *and name field.  User Screen size, Browser information, page title. 
 * Collect the first 100 mouse coordinates the user makes on the page.
 * 
 * 
1.  Create a Json that will collect all this data. It’s as simple as a key:value pair.
2. Collect the user input value when they blur on the field
    a. Email
    b. User name
3. The user screen size, user agent and page title can be collected when 
the window loads.
    a. window.innerHeight
    b. window. innerWidth
    c. window. navigator. userAgent
    d. document.title
4. Collect the user mouse cords by putting them into an array when the 
user moves there mouse on the document. One for the mouseX, and one for 
the mouseY.  Once the Array has a length of 100 you can stop pushing the 
mouse cords into the array.
    a. e.clientX
    b. e.clientY
    c. jsonVariable.ArrayVariable.push(e.clientX) (Do not name your variables this sample)

 */


var userdata = {
    
    "email": '',
    "name" : '',
    "height" : '',
    "width" : '',
    "user" : '',
    "title" : ''
};

var email = document.getElementById("email");
var fname = document.getElementById("fullname");
var height = document.getElementById("window.innerHeight");
var width = document.getElementById("window.innerWidth");
var user = document.getElementById("window.navigator.userAgent");
var title = document.getElementById("document.title");

function saveEmail() {
    userdata.email = email.value;
}

function saveName() {
    userdata.name = fname.value;
}

email.addEventListener("blur", saveEmail);
fname.addEventListener("blur", saveName);

function showResults() {
    console.clear();
    console.log(userdata);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);