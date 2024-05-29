let timer;
let isRunning = false;
let startTime;
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    startTime = new Date().getTime();
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStop").textContent = "Start";
  isRunning = false;
  lapCounter = 1;
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const elapsedTime = new Date().getTime() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
  document.getElementById("laps").appendChild(lapItem);
}

function updateDisplay() {
  const elapsedTime = new Date().getTime() - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  document.getElementById("display").textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}
