import './styles.css';
import { createHome } from './pages/home.js';
import { createMenu } from './pages/menu.js';
import { createContact } from './pages/contact.js';
import { createElement } from './utils/dom.js';
import { createNotification } from './pages/notification.js';

const addFooter = () => {
  const footer = document.createElement('footer');
  const content = [`&copy; ${new Date().getFullYear()} Vanderlei Martins.&nbsp;All rights reserved.`];

  content.forEach((item) => footer.appendChild(createElement(item)));

  document.body.appendChild(footer);
};

const addNotification = () => {
  document.body.appendChild(createNotification());
};

const content = document.getElementById('content');
const navButtons = document.querySelector('nav').querySelectorAll('button');

let prevButton = navButtons[0]; // home
prevButton.classList.add('active');

navButtons.forEach((button) =>
  button.addEventListener('click', () => {
    const btnContent = button.textContent;

    if (btnContent === prevButton.textContent) return;

    content.innerHTML = '';

    prevButton.classList.remove('active');
    prevButton = button;

    button.classList.add('active');

    switch (btnContent) {
      case 'HOME':
        content.appendChild(createHome());
        break;
      case 'MENU':
        content.appendChild(createMenu());
        break;
      case 'CONTACT':
        content.appendChild(createContact());
        break;
      default:
        content.appendChild(createHome());
    }
  }),
);

content.appendChild(createHome());
addFooter();
addNotification();
