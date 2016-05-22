function militaryAlphabet(input) {
	var input_uppercase = toUpperCase(input);
	var result = "";
	var military_alphabet = array(
			'A' => 'Alpha',
			'B' => 'Bravo',
			'C' => 'Charlie',
			'D' => 'Delta', 
			'E' => 'Echo',
			'F' => 'Foxtrot',
			'G' => 'Golf',
			'H' => 'Hotel',
			'I' => 'India',
			'J' => 'Juliet',
			'K' => 'Kilo',
			'L' => 'Lima',
			'M' => 'Mike',
			'N' => 'November',
			'O' => 'Oscar',
			'P' => 'Papa',
			'Q' => 'Quebec',
			'R' => 'Romeo',
			'S' => 'Sierra',
			'T' => 'Tango',
			'U' => 'Uniform',
			'V' => 'Victor',
			'W' => 'Whiskey',
			'X' => 'X-ray',
			'Y' => 'Yankee',
			'Z' => 'Zulu'
		);
	//validate
	if (input)

	//take sentence with multiple words
	//loop through letters
		//if a letter, return assocaited
		//if a space, '<br>'
	//push to final array
	//return array
}



$(document).ready(function() {
	$('#form_input').submit(function(event) {
	event.preventDefault();

	var input = $('#input').val();
	// var result = militaryAlphabet(input);
	$('#form_output').append('You said: ' + input);
	});
}); 