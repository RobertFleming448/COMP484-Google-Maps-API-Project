//NOTE code used in this script is adapted from the timed typing test project. Several things were changed around but the logic is mostly identical
let total=0;
let mil = 0;
let sec = 0;
let min = 0;
let start;			//starting time
let running=false;	//prevents starting over if system is already in an 'ON' state
let finished=false;	//prevents system from going again after success state
let interval;		//var for controlling timer interval
let errors=0;

function padZero(input)		//zero padding help from https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
{
	return String(input).padStart(2, '0');
}

// Run a standard minute/second/hundredths timer:
function stopWatch()
{
	//break down total milliseconds into larger denominations
	total=Date.now()-start;
	min=Math.floor(total/60000);
	sec=Math.floor((total%60000)/1000);
	mil=Math.floor(((total%60000)%1000)/10);
	setValue();

	//Math.floor found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
}

function format(total)
{
	min=padZero(Math.floor(total/60000));
	sec=padZero(Math.floor((total%60000)/1000));
	mil=padZero(Math.floor(((total%60000)%1000)/10));
	return min+":"+sec+":"+mil;
}

//sets timer values
function setValue()
{
	let mili=padZero(mil);
	let seconds=padZero(sec);
	let minutes=padZero(min);
	document.getElementById("time").innerHTML = minutes+":"+seconds+":"+mili;
}

// Start the timer:
function startTimer()
{
	if(finished===true)
	{
		return;
	}
	else
	{
		running=true;
		start=Date.now();
		//Date.now() found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
		interval=window.setInterval(stopWatch, 1);
		//set interval found here: https://www.w3schools.com/jsref/met_win_setinterval.asp
	}

}
