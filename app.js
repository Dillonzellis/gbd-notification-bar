const notifications = [
  {
    // primaryText: '',
    secondaryText:
      "Excel FCU will never ask you for your online banking information, pin number(s), or password(s).  Beware of fraudsters posing as Excel FCU via text, email or phone. Do not hesitate to call the credit union directly if you have questionable requests for information.",
    startDate: new Date("July 5, 2023 00:00:00"),
    endDate: new Date("July 25, 2024 23:59:59"),
    fontFamily: '"Lexend Deca", Helvetica, Arial, Lucida, sans-serif',
    brandingPrimary: "#D20000",
    brandingAccent: "#1B5D6C",
  },
  {
    primaryText:
      "Please mark your calendar.  Our Midtown office will be closed September 26.",
    secondaryText: "",
    startDate: new Date("June 10, 2023 17:00:00"),
    endDate: new Date("September 26, 2025 23:59:59"),
    fontFamily: '"Lexend Deca", Helvetica, Arial, Lucida, sans-serif',
    brandingPrimary: "#164752",
    brandingAccent: "#c70000",
  },
  {
    primaryText: "COMING SOON …",
    secondaryText: "Mobile App update.  A new look.  Enhanced functionality.",
    startDate: new Date("July 5, 2022 00:00:00"),
    endDate: new Date("September 4, 2025 23:59:59"),
    fontFamily: '"Lexend Deca", Helvetica, Arial, Lucida, sans-serif',
    brandingPrimary: "#0A3161",
    brandingAccent: "#1B5D6C",
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
  notificationBar.style.setProperty(
    "--brandingPrimary",
    notification.brandingPrimary,
  );
  notificationBar.style.setProperty(
    "--brandingAccent",
    notification.brandingAccent,
  );

  notificationBar.appendChild(container);

  if (
    currentDate >= notification.startDate &&
    currentDate <= notification.endDate
  ) {
    notificationBar.classList.toggle("hidden");
  }

  return notificationBar;
}

const container = document.querySelector("#notification-container");

notifications.forEach((notification) => {
  const notificationBar = createNotificationBar(notification);
  container.appendChild(notificationBar);
});
