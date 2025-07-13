// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("August 18, 2025 11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.innerHTML = "<p>It's naming day! 🎉</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = <p>${days}d ${hrs}h ${mins}m ${secs}s to go 🎈</p>;
}

setInterval(updateCountdown, 1000);
updateCountdown();