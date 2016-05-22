



$(document).ready(function() {
	$('#form_input').submit(function(event) {
	event.preventDefault();

	var input = $('#input').val();
	// var result = militaryAlphabet(input);
	$('#form_output').append('You said: ' + input);
	});
}); 