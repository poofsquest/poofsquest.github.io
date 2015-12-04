//this code is inspired in https://gist.github.com/edmundojr/975b08c39ab0a7a1b514
var $signupForm = $('.signup-form');
$signupForm.submit(function(e) {
	e.preventDefault();
	var data = $(this).serializeArray();
	var counter = 0;
	for (key in data){
		counter++;
		if(data[key]){
			if(data[key].value.trim() == ''){
				$signupForm.find('.alert')[0].innerHTML = "Please insert your email and try again. Thanks!";
				return;
			}
		}
		else{
			$signupForm.find('.alert')[0].innerHTML = "Please insert your email and try again. Thanks!";
			return;
		}
	}
	if (counter != 1){
		$signupForm.find('.alert')[0].innerHTML = "Please insert your email and try again. Thanks!";
		return;
	}
	$.ajax({
		url: '//formspree.io/poofsquest.forms@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$signupForm.find('.alert')[0].innerHTML = "Processing request…";
		},
		success: function(data) {
			$signupForm.find('.alert')[0].innerHTML = "Thanks! We will send you the beta version soon.";
			
		},
		error: function(err) {
			$signupForm.get(0).reset();
			$signupForm.find('.alert')[0].innerHTML = "Ops, there was an error. Please try again!";
		}
	});
});
