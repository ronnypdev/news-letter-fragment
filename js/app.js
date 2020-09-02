let notificationNumber = 0;
const notificationContainer = document.querySelector('#notify');
const form = document.querySelector('.form');

const notifications = [
  {
    message:
      '<p class="notification is-success txt-center">Congratulations your form has been successfully submitted</p>',
  },

  {
    message:
      '<p class="notification is-danger txt-center">Oh No! something went wrong please try again</p>',
  },
];

// Selects a random notification
const random = () => {
  notificationNumber = Math.floor(Math.random() * notifications.length);
  updateHTMl();
};

const updateHTMl = () => {
  for (let i = 0; i < notifications.length; i++) {
    notificationContainer.innerHTML = notifications[pageNumber].message;
  }
};

form.addEventListener('submit', function () {
  setTimeout(() => {
    random();
  }, 5000);
});
