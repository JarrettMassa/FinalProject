$(document).ready(function() {

    $("#back").on("click",function(){
    	history.back();
	});

	$("#signin").on("click",function(){
		event.preventDefault();
		if ( $("#email").val().trim().toString().length == '0'){
			$("#error").html("Error - Email can't be blank");
			return;
		}

		if ( $("#password").val().trim().toString().length == '0'){
			$("#error").html("Error - Password can't be blank");
			return;
		}


		var User = {
        	email: $("#email").val().trim().toLowerCase().toString(),
        	password: $("#password").val().trim().toString()
    	};

    	$.post("/signin/user", User, function (response) {
    			if (response == "UserOk"){
    				sessionStorage.setItem("user", User.email);
    				window.location.href = "/main";
    			}
    			else if (response == "NoUser"){
    				$("#error").html("Error - No user with that email exists");
    			}
    			else if (response == "BadPW"){
    				$("#error").html("Error - Password is incorrect");	
    			}
    			else {
    				$("#error").html("Error - Could not reach server");
    			}
    	});
	});

}); // End $(document).ready