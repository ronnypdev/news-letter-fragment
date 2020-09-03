// sets a starting point for array index
let notificationNumber = 0;

// Selects the notification-container from the DOM
const notificationContainer = document.querySelector('#notify');

// Selects form element from the DOM
const form = document.querySelector('.form');

/**
 * Notifications {Array}
 * Which holds the values for when the user submits the form
 */
const notifications = [
  {
    message:
      '<p class="notification is-success txt-center"><button class="delete"></button>Congratulations your form has been successfully submitted</p>',
  },

  {
    message:
      '<p class="notification is-danger txt-center"><button class="delete"></button>Oh No! something went wrong please try again</p>',
  },
];

/**
 * Selects a random notification from the {Array}
 * also uses the updateHTMl() to update the new
 * HTML injected into the DOM
 */
const random = () => {
  notificationNumber = Math.floor(Math.random() * notifications.length);
  updateHTMl();
};

/**
 * This function loops through the notifications {Array}
 * and it updates the notification-container with new the HTML
 *
 */
const updateHTMl = () => {
  for (let i = 0; i < notifications.length; i++) {
    notificationContainer.innerHTML = notifications[notificationNumber].message;
    notificationContainer.style.display = 'block';
  }
};

/**
 * Attached a submit event to the form
 * Also implemented the timeout for the 2 seconds delay
 */
form.addEventListener('submit', function (eve) {
  eve.stopImmediatePropagation();
  eve.preventDefault();
  setTimeout(() => {
    random();
  }, 2000);
});

/**
 * Click event for notifications to close
 * once they are displayed
 */
notificationContainer.addEventListener('click', function (event) {
  // If anything other than the close button was pressed, do nothing
  if (!event.target.matches('.delete')) return;

  if (event.target.matches('.delete')) {
    notificationContainer.style.display = 'none';
  }
});
