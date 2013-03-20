// function store token in cookie
function authenticate(auth){
    $.cookie("_token", auth.token);
    alert(auth.token);
}

function login(){
    
 email = $("#user_email").val();
 password = $("#user_password").val();
 
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