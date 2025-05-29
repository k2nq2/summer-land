function createTimer(containerId, totalSeconds) {
  let duration = totalSeconds;

  const hoursEl = document.getElementById('hours' + containerId);
  const minutesEl = document.getElementById('minutes' + containerId);
  const secondsEl = document.getElementById('seconds' + containerId);

  function updateTimer() {
    const hours = String(Math.floor(duration / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((duration % 3600) / 60)).padStart(2, '0');
    const seconds = String(duration % 60).padStart(2, '0');

    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    if (duration > 0) {
      duration--;
    } else {
      clearInterval(interval);
    }
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
}


createTimer('1', 60 * 60 - 1); 
createTimer('2', 60 * 60 - 1);     
