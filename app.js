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
