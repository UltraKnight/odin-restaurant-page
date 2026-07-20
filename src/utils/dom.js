export const createElement = (innerHtml, element = 'p') => {
  const allowed = new Set(['p', 'h1', 'h2']);

  if (!allowed.has(element)) return document.createElement('div');

  const el = document.createElement(element);
  el.innerHTML = innerHtml;

  return el;
};
