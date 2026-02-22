function updateCountdown() {
  const countdownEl = document.getElementById('countdown');
  const now = new Date();

  // Next Sunday 10:00 AM CST
  let nextSunday = new Date();
  nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
  nextSunday.setHours(10, 0, 0, 0); // 10:00 AM

  const diff = nextSunday - now;

  if (diff <= 0) {
    countdownEl.textContent = "Live now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();