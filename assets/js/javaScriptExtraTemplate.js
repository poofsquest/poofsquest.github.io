//this code is inspired in https://gist.github.com/edmundojr/975b08c39ab0a7a1b514
var $signupForm = $('.signup-form');
$signupForm.submit(function(e) {
	e.preventDefault();
	$signupForm.find('.alert--loading').remove();
	$signupForm.find('.alert--success').remove();
	$signupForm.find('.alert--error').remove();
	$.ajax({
		url: '//formspree.io/poofsquest.forms@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$signupForm.append('<div class="alert alert--loading">Processing request…</div>');
		},
		success: function(data) {
			$signupForm.find('#email').val("Email Address");
			$signupForm.find('.alert--loading').hide();
			$signupForm.append('<div class="alert alert--success">Thanks! We just got your email.<br>We will send you the beta version soon!</div>');
		},
		error: function(err) {
			$signupForm.find('.alert--loading').hide();
			$signupForm.append('<div class="alert alert--error">Ops, there was an error. Try again!</div>');
		}
	});
});