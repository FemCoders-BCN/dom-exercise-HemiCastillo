import { JSDOM } from 'jsdom';
import { changeColor } from '../src/js/app.js';

// configuracion de jsdom
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;

test('Cambio de color a rojo', () => {
  const redElement = document.createElement('div');
  redElement.classList.add('red');
  document.body.appendChild(redElement);

  changeColor('red');

  expect(redElement.style.backgroundColor).toBe('red');
});



