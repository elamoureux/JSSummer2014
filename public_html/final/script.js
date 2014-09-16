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

function phoneValidate (str){
    var phoneRegex = /^[2-9]\d{2}-\d{3}-\d{4}$/; //stackoverflow help
    return phoneRegex.test(str);
}

function submitform() {
    var fullName = document.getElementById("fullname");
    var fullNameErr = document.getElementById("err_fullname");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
    var phone = document.getElementById("phone");
    var phoneErr = document.getElementById("err_phone");
    
    var hasErrors = false;
    
    if ( !fullName.value.length ) {
        hasErrors = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>Full name must be entered.</p>";     
    } else if( SpaceAlphaValidate( fullName.value ) === false){
        hasErrors = true;
        fullName.classList.remove('good');
        fullName.classList.add('bad');       
        fullNameErr.innerHTML = "<p>First name entered is not correct in character format.</p>";
    }else {
        fullName.classList.remove('bad');
        fullName.classList.add('good');        
        fullNameErr.innerHTML = '';      
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
    
    if (!phone.value.length){
        hasErrors = true;
        phone.classList.remove('good');
        phone.classList.add('bad');
        phoneErr.innerHTML = "<p>Phone number is not valid length.<p>";      
    } else if (phoneValidate (phone.value) === false){
        hasErrors = true;
        phone.classList.remove('good');
        phone.classList.add('bad');
        phoneErr.innerHTML = "<p>Phone number is not correct format.<p>"; 
    }
    else {
        phone.classList.remove('bad');
        phone.classList.add('good');
        phoneErr.innerHTML = '';
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
        var resultString = '<p> Full Name :' + fullName.value +'</p>' + '<p> Email : ' + email.value + '</p>' + '<p> Phone Number : '+ phone.value + '</p>' + '<p> Comments : ' + comments.value + '</p>';
        result.innerHTML = resultString;
    }
}