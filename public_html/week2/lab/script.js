/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    
    var hasErrors = false;
    
    
    if ( fullname.value.length > 0 && fullname.value.length < 150) {
        fullname.classList.remove('bad');
        fullname.classList.add('good');        
        fullnameErr.innerHTML = '';

    } else {
        hasErrors = true;
        fullname.classList.remove('good');
        fullname.classList.add('bad');       
        fullnameErr.innerHTML = "<p>Full Name is not valid.</p>";       
    }

      
    
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


