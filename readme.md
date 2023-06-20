# Notification Bar

The notification bar consists of two text elements: a primary text and a
secondary text and accepts a date range for alerts to be automatically displayed
depending the current date and desired range of dates. Additionally, it is
responsive and customizable through the CSS variables and Js variables.

## HTML Structure

- The outermost element `<div class="notification-bar">` represents the
  container for the entire notification bar.
- Inside the notification bar, we have a container
  `<div class="container-de text-content">` that holds the text elements.
- The primary text is represented by `<div class="primary-text"></div>`.
- The secondary text is represented by `<div class="secondary-text"></div>`.

## Javascript Code

The JavaScript code is responsible for dynamically populating the primary and
secondary text elements with content and controlling the visibility of the
notification bar based on a specific date range.

- The variables creditUnion, day, date, holiday, and openDay are provided to
  hold specific values that will be used to construct the text content.
- The startDate and endDate variables are set to specific dates and times that
  define the range during which the notification bar should be visible.

## CSS Styling

The CSS code provides the styling for the notification bar and its components.
It defines variables for customization, sets up responsive styles, and applies
styles to various elements.

- Customization Variables:

  - --brandingPrimary: Represents the primary branding color.
  - --brandingAccent: Represents the accent branding color.
  - --max-width: Represents the maximum width of the container.
  - --container-padding: Represents the padding around the container.
  - --font-family: Represents the font family used for text elements.

- Notification Bar Styling:
  - The .notification-bar class styles the outer container of the notification
    bar. It sets the font family, padding, text alignment, text color, and
    background gradient.
  - The linear-gradient function is used to create a gradient background that
    transitions from the branding primary color to black.
  - The border-bottom property adds a 5px solid border at the bottom using the
    branding accent color.
