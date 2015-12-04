//this code is inspired in https://gist.github.com/edmundojr/975b08c39ab0a7a1b514
var $signupForm = $('.signup-form');
$signupForm.submit(function(e) {
	e.preventDefault();
	$signupForm.find('.alert--loading').remove();
	$signupForm.find('.alert--success').remove();
	$signupForm.find('.alert--error').remove();
	var data = $(this).serializeArray();
	var counter = 0;
	for (key in data){
		counter++;
		if(data[key]){
			if(data[key].value.trim() == ''){
				$signupForm.append("<div class='alert alert--error'>Please fill all the information and try again. Thanks!</div>");
				return;
			}
		}
		else{
			$signupForm.append("<div class='alert alert--error'>Please fill all the information and try again. Thanks!</div>");
			return;
		}
	}
	if (counter != 3){
		$signupForm.append("<div class='alert alert--error'>Please fill all the information and try again. Thanks!</div>");
		return;
	}
	$.ajax({
		url: '//formspree.io/poofsquest.forms@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$signupForm.append('<div class="alert alert--loading">Processing request…</div>');
		},
		success: function(data) {
			$signupForm.find('.alert--loading').hide();
			$signupForm.append('<div class="alert alert--success">Thanks! We just got your email.</div>');
		},
		error: function(err) {
			$signupForm.find('.alert--loading').hide();
			$signupForm.append('<div class="alert alert--error">Ops, there was an error. Please try again!</div>');
		}
	});
});
