$(function() {
	$(".submit").click(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var subject = $("#subject").val();
		var message = $("#message").val();
		var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

		if (name == 'You probably have a good name! Enter it here.' || email == 'E-mail' || mobile='Mobile' || subject == 'Subject' || message == 'Message') {
			$('.success').fadeOut(800).hide();
			$('.error').fadeIn(800).show();
		} else {
			$.ajax({
				type : "POST",
				url : "invio.php",
				data : dataString,
				success : function() {
					$('.success').fadeIn(800).show();
					$('.error').fadeOut(800).hide();
				}
			});
		}
		return false;
	});
}); 