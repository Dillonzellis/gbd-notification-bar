const notifications = [
  {
    primaryText: 'Our Midtown Branch will be closed on Tuesday, August 29.',
    secondaryText: 'We apologize for any inconvenience.',
    startDate: new Date("June 10, 2023 17:00:00"),
    endDate: new Date("August 29, 2023 23:59:59"),
    fontFamily: '"Lexend Deca", Helvetica, Arial, Lucida, sans-serif',
    brandingPrimary: '#164752',
    brandingAccent: '#c70000'
  },
  {
    primaryText: 'We will be closed in observance of Labor Day on Monday, September 4.',
    // secondaryText: 'Excel FCU will never ask you for your online banking information, pin number(s), or password(s).  Beware of fraudsters posing as Excel FCU via text, email or phone. Do not hesitate to call the credit union directly if you have questionable requests for information.',
    startDate: new Date("July 5, 2023 00:00:00"),
    endDate: new Date("September 4, 2023 23:59:59"),
    fontFamily: '"Lexend Deca", Helvetica, Arial, Lucida, sans-serif',
    brandingPrimary: '#D20000',
    brandingAccent: '#1B5D6C'
  },
];

const currentDate = new Date();

function createNotificationBar(notification) {
  const notificationBar = document.createElement("div");
  notificationBar.classList.add("notification-bar", "hidden");

  const container = document.createElement("div");
  container.classList.add("container-de", "text-content");

  if (notification.primaryText) {
    const primary = document.createElement("div");
    primary.classList.add("primary-text");
    primary.textContent = notification.primaryText;
    container.appendChild(primary);
  }


  if (notification.secondaryText) {
    const secondary = document.createElement("div");
    secondary.classList.add("secondary-text");
    secondary.textContent = notification.secondaryText;
    container.appendChild(secondary);
  }

  notificationBar.style.setProperty("--font-family", notification.fontFamily);
  notificationBar.style.setProperty("--brandingPrimary", notification.brandingPrimary);
  notificationBar.style.setProperty("--brandingAccent", notification.brandingAccent);

  notificationBar.appendChild(container);

  if (currentDate >= notification.startDate && currentDate <= notification.endDate) {
    notificationBar.classList.toggle("hidden");
  }

  return notificationBar;
}

const container = document.querySelector("#notification-container");

notifications.forEach(notification => {
  const notificationBar = createNotificationBar(notification);
  container.appendChild(notificationBar);
});
