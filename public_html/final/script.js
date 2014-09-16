function emailValidate (str){
    var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+.[a-zA-Z]{2,3}$/;
    return emailRegex.test(str);
}

function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str);			
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitform() {
    var firstName = document.getElementById("firstname");
    var firstNameErr = document.getElementById("err_firstname");
    var lastName = document.getElementById("lastname");
    var lastNameErr = document.getElementById("err_lastname");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
    
    var hasErrors = false;
    
    if ( !firstName.value.length ) {
        hasErrors = true;
        firstName.classList.remove('good');
        firstName.classList.add('bad');       
        firstNameErr.innerHTML = "<p>First name must be entered.</p>";     
    } else if( SpaceAlphaValidate( firstName.value ) === false){
        hasErrors = true;
        firstName.classList.remove('good');
        firstName.classList.add('bad');       
        firstNameErr.innerHTML = "<p>First name entered is not correct in character format.</p>";
    }else {
        firstName.classList.remove('bad');
        firstName.classList.add('good');        
        firstNameErr.innerHTML = '';      
    }
  
    if ( !lastName.value.length ) {
        hasErrors = true;
        lastName.classList.remove('good');
        lastName.classList.add('bad');       
        lastNameErr.innerHTML = "<p>First name must be entered.</p>";     
    } else if( SpaceAlphaValidate( lastName.value ) === false){
        hasErrors = true;
        lastName.classList.remove('good');
        lastName.classList.add('bad');       
        lastNameErr.innerHTML = "<p>First name entered is not correct in character format.</p>";
    }else {
        lastName.classList.remove('bad');
        lastName.classList.add('good');        
        lastNameErr.innerHTML = '';      
    }
    
    if (!email.value.length){
        hasErrors = true;
        email.classList.remove('good');
        email.classList.add('bad');
        emailErr.innerHTML = "<p>Email is not valid length.<p>";      
    } else if (emailValidate (email.value) === false){
        hasErrors = true;
        email.classList.remove('good');
        email.classList.add('bad');
        emailErr.innerHTML = "<p>Email is not correct format.<p>"; 
    }
    else {
        email.classList.remove('bad');
        email.classList.add('good');
        emailErr.innerHTML = '';
    }
    
    comments.value = strip_HTML(comments.value);
    
    if (comments.value.length > 0 && comments.value.length < 150) {
        comments.classList.remove('bad');
        comments.classList.add('good');
        commentsErr.innerHTML = '';
    }
    else {
        hasErrors = true;
        comments.classList.remove('good');
        comments.classList.add('bad');
        commentsErr.innerHTML = "<p>Comments are not valid length.<p>";
    }			
       
    if (hasErrors === false){
        var contentForm = document.getElementById('mainform');
        contentForm.style.display = 'none';
        
        var result = document.getElementById('result');
        var resultString = '<p> First Name :' + firstName.value + '</p>'+ '<p> Last Name : ' + lastName.value + '</p>' + '<p> Email : ' + email.value + '</p>' + '<p> Comments : ' + comments.value + '</p>';
        result.innerHTML = resultString;
    }
}