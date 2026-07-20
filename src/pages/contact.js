import { createElement } from '../utils/dom.js';

export const createContact = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'contact');

  const content = ['Green Fork', 'Email: green@fork.com', 'Contact: 999 999 999'];

  content.forEach((item) => div.appendChild(createElement(item)));

  return div;
};
