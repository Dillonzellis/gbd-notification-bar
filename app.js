const primary = document.querySelector(".primary-text");
const secondary = document.querySelector(".secondary-text");

const creditUnion = "1st Choice";
const day = "Monday";
const date = "May 31st";
const holiday = "Memorial Day";
const openDay = "Tuesday, June 1st";

const primaryText = `We will be closed on ${day}, ${date} in observance of ${holiday}.`;
const secondaryText = `${openDay} we will be open with regular business hours.`;

primary.textContent = primaryText;
secondary.textContent = secondaryText;

const notifBar = document.querySelector(".notification-bar");
const currentDate = new Date();
const startDate = new Date("June 10, 2023 17:00:00");
const endDate = new Date("June 19, 2023 23:59:59");

const toggleElementByDate = (startDate, EndDate) => {
  if (currentDate >= startDate && currentDate <= endDate) {
    notifBar.classList.toggle("hidden");
  }
};

toggleElementByDate(startDate, endDate);
