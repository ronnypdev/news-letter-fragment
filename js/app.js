let notificationNumber = 0;
const notificationContainer = document.querySelector('#notify');
const form = document.querySelector('.form');

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

// Selects a random notification
const random = () => {
  notificationNumber = Math.floor(Math.random() * notifications.length);
  updateHTMl();
};

const updateHTMl = () => {
  for (let i = 0; i < notifications.length; i++) {
    notificationContainer.innerHTML = notifications[notificationNumber].message;
  }
};

form.addEventListener('submit', function (eve) {
  eve.preventDefault();
  setTimeout(() => {
    random();
  }, 5000);
});
