import Burger from './burger/burger.js';
import Element from './element/element.js';
import { products } from './products.js';

const cardTemplate = document.querySelector('.template').content;
const burgerIcon = document.querySelector('.header__icon_burger');
const burgerBlock = document.querySelector('.burger');

products.forEach((item) => {
  const element = new Element(item, cardTemplate);
  element.renderElement();
})

burgerIcon.addEventListener('click', () => {
  const openBurger = new Burger(burgerBlock);
  openBurger.openBurger();
})
