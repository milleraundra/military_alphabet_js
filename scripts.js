function getMilitaryAlphabetKeyAndValuePairs(key, value, map) {
	console.log("key: " + key + " | value: " + value);
}

militaryAlphabet = function(input) {
	var result = new Array;
	var military_alphabet = new Array();
	military_alphabet['A'] = 'Alpha';
	military_alphabet['B'] = 'Bravo';
	military_alphabet['C'] = 'Charlie';
	military_alphabet['D'] = 'Delta';
	military_alphabet['E'] = 'Echo';
	military_alphabet['F'] = 'Foxtrot';
	military_alphabet['G'] = 'Golf';
	military_alphabet['H'] = 'Hotel';
	military_alphabet['I'] = 'India';
	military_alphabet['J'] = 'Juliet';
	military_alphabet['K'] = 'Kilo';
	military_alphabet['L'] = 'Lima';
	military_alphabet['M'] = 'Mike';
	military_alphabet['N'] = 'November';
	military_alphabet['O'] = 'Oscar';
	military_alphabet['P'] = 'Papa';
	military_alphabet['Q'] = 'Quebec';
	military_alphabet['R'] = 'Romeo';
	military_alphabet['S'] = 'Sierra';
	military_alphabet['T'] = 'Tango';
	military_alphabet['U'] = 'Uniform';
	military_alphabet['V'] = 'Victor';
	military_alphabet['W'] = 'Whiskey';
	military_alphabet['X'] = 'X-ray';
	military_alphabet['Y'] = 'Yankee';
	military_alphabet['Z'] = 'Zulu';

	//validate
		//TEMPORARILY ASSUME SANITIZED INPUT

	var input_uppercase = input.toUpperCase();
	var input_array = input_uppercase.split("");

	input_array.forEach(function(letter) {

		if((letter >= 'A') && (letter <= 'Z')) {
			result.push(military_alphabet[letter]);
		} else if ( letter === " ") {
			result.push('<br>');
		}

	});
	result = result.join(" ");
	return result;

}



$(document).ready(function() {
	$('#form_input').submit(function(event) {
	event.preventDefault();

	var input = $('#input').val();
	var result = militaryAlphabet(input);
	$('#form_output').empty();
	$('#form_output').append(result);
	});
}); 