function fahrenheit2Celsius(tempF) {
	//Odečti 32, pak vynásob 5, pak poděl 9
	return Math.round( (tempF - 32) * 5 / 9 );
}

function celsius2Fahrenheit(tempC) {
	return Math.round( tempC * 9 / 5 + 32 );
}