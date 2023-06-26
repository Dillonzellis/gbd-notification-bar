const primary = document.querySelector(".primary-text");
const secondary = document.querySelector(".secondary-text");

const creditUnion = "1st Choice";
const day = "Tuesday";
const date = "July 4th";
const holiday = "Independence Day";
const openDay = "Wednesday, July 5th";

const primaryText = `We will be closed on ${day}, ${date} in observance of ${holiday}.`;
const secondaryText = `${openDay} we will be open with regular business hours.`;

primary.textContent = primaryText;
secondary.textContent = secondaryText;

const notifBar = document.querySelector(".notification-bar");
const currentDate = new Date();
const startDate = new Date("June 10, 2023 17:00:00");
const endDate = new Date("July 4, 2023 23:59:59");

const toggleElementByDate = (startDate, EndDate) => {
  if (currentDate >= startDate && currentDate <= endDate) {
    notifBar.classList.toggle("hidden");
  }
};

toggleElementByDate(startDate, endDate);