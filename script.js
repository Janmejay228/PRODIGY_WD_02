let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  let minutes = Math.floor((milliseconds % 3600000) / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  let ms = Math.floor((milliseconds % 1000) / 10);

  return (
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(ms).padStart(2, '0')
  );
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopBtn.textContent = 'Start';
    isRunning = false;
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    startStopBtn.textContent = 'Stop';
    isRunning = true;
  }
}

function reset() {
  clearInterval(timerInterval);
  display.textContent = '00:00:00.00';
  startStopBtn.textContent = 'Start';
  elapsedTime = 0;
  isRunning = false;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
