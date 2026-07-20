import greenSalad from '../assets/green_salad.jpg';
import chicken_breast_steak from '../assets/chicken_breast_steak.jpg';
import penne_pesto from '../assets/penne_pesto.jpg';
import matcha_cheesecake from '../assets/matcha_cheesecake.jpg';
import { formatter } from '../utils/currency.js';

export const createMenu = () => {
  const cardsContent = [
    {
      imgSrc: greenSalad,
      title: 'Green Salad',
      description: 'A fresh mix of crisp lettuce, seasonal vegetables, and a light, refreshing dressing.',
      price: formatter(5.0),
    },
    {
      imgSrc: chicken_breast_steak,
      title: 'Chicken Breast Steak',
      description: 'Tender grilled chicken breast, seasoned with herbs and cooked to perfection.',
      price: formatter(8.5),
    },
    {
      imgSrc: penne_pesto,
      title: 'Penne with Pesto',
      description: 'Al dente penne pasta tossed in a rich, aromatic basil pesto sauce with Parmesan.',
      price: formatter(12.9),
    },
    {
      imgSrc: matcha_cheesecake,
      title: 'Matcha Cheesecake',
      description:
        'Creamy cheesecake infused with premium matcha green tea, offering a smooth texture and delicate earthy flavor.',

      price: formatter(6.0),
    },
  ];

  const div = document.createElement('div');
  div.setAttribute('class', 'menu');
  cardsContent.forEach((card) => div.appendChild(createCard(card)));

  return div;
};

const createCard = ({ imgSrc, title, description, price }) => {
  const section = document.createElement('section');
  section.setAttribute('class', 'menu-item');

  const img = document.createElement('img');
  img.src = imgSrc;

  const h3 = document.createElement('h3');
  h3.textContent = title;

  const paragraph1 = document.createElement('p');
  paragraph1.textContent = description;

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = price;

  section.append(img, h3, paragraph1, paragraph2);

  return section;
};
