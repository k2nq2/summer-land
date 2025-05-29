
    let duration = 60 * 60 - 1; // 59:59

    function updateTimer() {
      const hours = String(Math.floor(duration / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((duration % 3600) / 60)).padStart(2, '0');
      const seconds = String(duration % 60).padStart(2, '0');

      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;

      if (duration > 0) {
        duration--;
      } else {
        clearInterval(interval);
      }
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);