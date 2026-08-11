document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date('2026-08-05T00:00:00');
  const currentDate = new Date();
  const differenceInMs = currentDate - startDate;
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor(differenceInMs / msPerDay);
  const dayCount = document.getElementById("server-day-count");

  if (dayCount) {
    dayCount.textContent = `${daysBetween}`;
  } else {
    console.log("Error. Contact ShortBoi");
  }
});