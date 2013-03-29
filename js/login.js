// function store token in cookie
function authenticate(auth){
    $.cookie("_token", auth.token);
    getCollection(); 
    if(auth ) {        
        $.mobile.navigate("#collection");
    }
    else{
        alert("Failse");    
    }    
}    

function login(){
  // get email, password from jquery  
  email = $("#user_email").val();
  password = $("#user_password").val();
  
  // get email, password from knockoutjs
  //email = window.model.email();
  //password = window.model.password();
  $.ajax({
    url: 'http://localhost:3000/api/tokens.json',
    dataType: "jsonp",
    type: 'POST',
    success: function(data) {
        console.dir(data);
    },
    beforeSend: function(xhr){ 
           xhr.setRequestHeader('Authorization', 'Basic ' + btoa(email + ":" + password));  
    }
  });
}