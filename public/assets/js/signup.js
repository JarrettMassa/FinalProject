$(document).ready(function() {

	$("#back").on("click",function(){
    	history.back();
	});

	$("#create").on("click",function(){
		event.preventDefault();

		if ( $("#fname").val().trim().toString().length == '0'){
			$("#error").html("Error - First name can't be blank");
			return;
		}

		if ( $("#lname").val().trim().toString().length == '0'){
			$("#error").html("Error - Last name can't be blank");
			return;
		}

		if ( $("#email").val().trim().toString().length == '0'){
			$("#error").html("Error - Email can't be blank");
			return;
		}

		if ( $("#photo").val().trim().toString().length == '0'){
			$("#error").html("Error - Photo can't be blank");
			return;
		}

		if ( $("#password").val().trim().toString().length == '0'){
			$("#error").html("Error - Password can't be blank");
			return;
		}

		if ( $("#confirmpw").val().trim().toString().length == '0'){
			$("#error").html("Error - Please confirm password");
			return;
		}

		if ($("#password").val().trim().toString() == $("#confirmpw").val().trim().toString()){
			var newUser = {
        		fname: $("#fname").val().trim().toString(),
        		lname: $("#lname").val().trim().toString(),
        		email: $("#email").val().trim().toLowerCase().toString(),
        		photo: $("#photo").val().trim().toString(),
        		password: $("#password").val().trim().toString()
    		};

    		$.post("/signup/newuser", newUser, function (response) {
    			if (response == "UserExists"){
    				$("#error").html("Error - User with that email already exists");
    			}
    			else if (response == "UserCreated"){
    				sessionStorage.setItem("user", newUser.email);	
    				window.location.href = "/main";
    			}
    			else {
    				$("#error").html("Error - Could not reach server");
    			}
    		});
		}
		else{
			$("#error").html("Error - Passwords don't match");
			return
		}    	
	});

	}); // End $(document).ready

	function checkPhoto(){
		var x = $("#photo").val().trim().toString();
		$.get(x)
    	.done(function() { 
    		console.log("good");
    		$(".profile-pic").attr("src",x);	
    		$("#profile-pic-comment").text("OMG you're so hot!!!");
    	}).fail(function() { 
    		$("#error").html("Error - The image URL you entered is invalid. Please try again.");
    		$(".profile-pic").attr("src","");
    	})
	};