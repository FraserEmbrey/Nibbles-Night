// Set the target date
const targetDate = new Date("December 11, 2024 18:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the display
  const countdownElement = document.getElementById("countdown");

  if (timeLeft > 0) {
    if (days > 0) {
      countdownElement.textContent = `${days} day${days > 1 ? "s" : ""} to go!`;
    } else {
      countdownElement.textContent = `${hours} hour${hours !== 1 ? "s" : ""}, ${minutes} minute${minutes !== 1 ? "s" : ""}, and ${seconds} second${seconds !== 1 ? "s" : ""} to go!`;
    }
  } else {
    clearInterval(countdown);
    countdownElement.textContent = "Event Started!";
  }
}, 1000);
