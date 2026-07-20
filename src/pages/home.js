import { createElement } from '../utils/dom.js';

export const createHome = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'home');
  const content = [
    { content: 'Green Fork', el: 'h2' },
    {
      content:
        'Green Fork is a modern restaurant focused on healthy eating, offering fresh salads, nutritious bowls, wraps, and wholesome meals made with carefully selected ingredients. For those who enjoy a balanced lifestyle without giving up dessert, the menu also features handcrafted sweet treats, all served in a cozy and welcoming atmosphere.',
      el: 'p',
    },
    {
      content: 'Hours',
      el: 'h2',
    },
    {
      content: 'Monday to Friday - 10 AM to 3 PM',
      el: 'p',
    },
  ];

  content.forEach((item) => div.appendChild(createElement(item.content, item.el)));

  return div;
};
