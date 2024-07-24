window.onload = function () {
    let startTime;
    let updatedTime;
    let difference;
    let tInterval;
    let running = false;
    let lapNumber = 0;

    const display = document.getElementById("display");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");
    const lapBtn = document.getElementById("lap");
    const lapsList = document.getElementById("laps");

    // Function to start the stopwatch
    function startStopwatch() {
        if (!running) {
            startTime = new Date().getTime();
            tInterval = setInterval(getShowTime, 1);
            running = true;
            startBtn.style.display = "none";
            stopBtn.style.display = "inline-block";
        }
    }

    // Function to stop the stopwatch
    function stopStopwatch() {
        if (running) {
            clearInterval(tInterval);
            running = false;
            startBtn.style.display = "inline-block";
            stopBtn.style.display = "none";
        }
    }

    // Function to reset the stopwatch
    function resetStopwatch() {
        clearInterval(tInterval);
        display.innerHTML = "00:00:00";
        running = false;
        lapNumber = 0;
        lapsList.innerHTML = "";
        startBtn.style.display = "inline-block";
        stopBtn.style.display = "none";
    }

    // Function to record a lap
    function recordLap() {
        if (running) {
            lapNumber++;
            const lapTime = display.innerHTML;
            const lapItem = document.createElement("li");
            lapItem.innerText = `Lap ${lapNumber}: ${lapTime}`;
            lapsList.appendChild(lapItem);
        }
    }

    // Function to calculate the time difference and display it
    function getShowTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        display.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    // Event Listeners
    startBtn.addEventListener("click", startStopwatch);
    stopBtn.addEventListener("click", stopStopwatch);
    resetBtn.addEventListener("click", resetStopwatch);
    lapBtn.addEventListener("click", recordLap);
};
