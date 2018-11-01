$(document).ready(function() {

	$(".msg-button").on("click",function(){

    	var x = $(this).attr("button-id");

    	var emailAddress = $(".match-email-" + x).text();
    	var name = $(".match-name-" + x).text();
    	var subject = "I'm hot, you're hot, let's do this!!!";
    	var body = "Why hello there " + name + ". I have no clue WTF this app is but apparently we're supposed to go on a date or something?";

		window.open('mailto:' + emailAddress + '?subject=' + subject + '&body=' + body);
	});

}); // End $(document).ready