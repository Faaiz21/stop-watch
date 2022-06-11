/*window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){
            OutputSeconds.innerHTML = seconds;
        }
    }
}*/












var seconds = 00;
var tens = 00;
var outputSeconds = document.getElementById("second");
var outputTens = document.getElementById("tens");
var startBtn = document.getElementById("btn-start");
var stopBtn = document.getElementById("btn-stop");
var resetBtn = document.getElementById("btn-reset");
var Interval;

startBtn.addEventListener('click', () => {
	Interval = setInterval(startTimer, 10);
})

stopBtn.addEventListener('click', () => {
	clearInterval(Interval);
})

resetBtn.addEventListener('click', () => {
	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	outputTens.innerHTML = tens;
	outputSeconds.innerHTML = seconds;
})

function startTimer() {
	tens++
	if(tens <=9){
       outputTens.innerHTML = "0" + tens;
	}
	if(tens>9){
	  outputTens.innerHTML =tens;	
	}
	if(tens>99){
		seconds++;
		outputSeconds.innerHTML = "0" + seconds;
		tens = 0;
		outputTens.innerHTML = "0" +tens;
	}
	if(seconds>9){
		outputSeconds.innerHTML = seconds;
	}
}