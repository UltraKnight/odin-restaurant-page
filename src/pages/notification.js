const notification = document.createElement('div');

export const createNotification = () => {
  const span = document.createElement('span');
  span.textContent = 'Bon appétit!';

  const btnClose = document.createElement('button');
  btnClose.textContent = 'X';
  btnClose.addEventListener('click', hideNotification);
  btnClose.classList.add('rounded');

  notification.classList.add('notification');
  notification.appendChild(span);
  notification.appendChild(btnClose);
  notification.hidden = true;

  return notification;
};

export const showNotification = () => {
  notification.hidden = false;
  notification.classList.add('visible');
};

const hideNotification = () => {
  notification.hidden = true;
  notification.classList.remove('visible');
};
