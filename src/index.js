import './styles.css';
import { createHome } from './pages/home.js';
import { createMenu } from './pages/menu.js';
import { createContact } from './pages/contact.js';
import { createElement } from './utils/dom.js';

const addFooter = () => {
  const footer = document.createElement('footer');
  const content = [`&copy; ${new Date().getFullYear()} Vanderlei Martins.&nbsp;All rights reserved.`];

  content.forEach((item) => footer.appendChild(createElement(item)));

  document.body.appendChild(footer);
};

const content = document.getElementById('content');
const navButtons = document.querySelector('nav').querySelectorAll('button');
navButtons.forEach((button) =>
  button.addEventListener('click', () => {
    content.innerHTML = '';

    switch (button.textContent) {
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
