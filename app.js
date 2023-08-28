const notifications = [
  {
    primaryText: "Software Outage!",
    secondaryText: "Drive Thru Only; Deposits Only. Cards and App are down.",
    startDate: new Date("July 5, 2023 00:00:00"),
    endDate: new Date("July 25, 2024 23:59:59"),
    fontFamily: "Montserrat, sans-serif;",
    brandingPrimary: "#D20000",
    brandingAccent: "#0164A3",
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
