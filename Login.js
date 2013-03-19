/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
  $.ajaxSetup({
    beforeSend: function( xhr ) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    }
  });
});

function login (){
  $.ajax({
    url: 'index.html',
    type: 'POST',
    data: {user: {user_email: 'email', user_password: 'password'}},
    success: function(data, textStatus, xhr) {
        alert("Success");
    //called when successful
    }
  });
}


