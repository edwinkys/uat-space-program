// Create variables
var time_elapsed = 0;
var latitude = 0;
var longitude = 0;
var gps_altitude = 0;

var bmp_sensor_altitude = 0;
var bmp_sensor_pressure = 0;
var bmp_sensor_temperature = 0;
var digital_sensor_temperature = 0;

var css_sensor_temperature = 0;
var css_sensor_eco2 = 0;
var css_sensor_tvoc = 0;
var uv = 0;

var accel_x = 0;
var accel_y = 0;
var accel_z = 0;

var magnetic_x = 0;
var magnetic_y = 0;
var magnetic_z = 0;

var gyro_x = 0;
var gyro_y = 0;
var gyro_z = 0;

var list_variables = [
	'time_elapsed',
	'latitude',
	'longitude',
	'gps_altitude',
	'bmp_sensor_altitude',
	'bmp_sensor_pressure',
	'bmp_sensor_temperature',
	'digital_sensor_temperature',
	'css_sensor_temperature',
	'css_sensor_eco2',
	'css_sensor_tvoc',
	'uv',
	'accel_x',
	'accel_y',
	'accel_z',
	'magnetic_x',
	'magnetic_y',
	'magnetic_z',
	'gyro_x',
	'gyro_y',
	'gyro_z'
	]

var array_len = list_variables.length;

function countdown(seconds=0){
	// Declare the string variable
	var hour = '00';
	var minute = '00';
	var index = seconds;
	
	// Display the countdown timer
	for(var i = 0; i <= index; i++){
		setTimeout(function(){
			// Display blastoff if the countdown reach 0
			if (i == index){
				document.getElementById("countdown").innerHTML = '--:--:--';
			}
			else{
				second = String("0" + seconds).slice(-2);
				document.getElementById("countdown").innerHTML = hour + ':' + minute + ':' + second;
				seconds--;
			}
		}, 
		i * 1000);
	}
}

function reset_data(){
	for(var i = 0; i < array_len; i++){
		document.getElementById(list_variables[i]).innerHTML = 0;
	}
}

function insert_sample_data(){
	for(var i = 0; i < array_len; i++){
		var rand_number = Math.floor(Math.random() * 100) + 1;

		document.getElementById(list_variables[i]).innerHTML = rand_number;
	}
}