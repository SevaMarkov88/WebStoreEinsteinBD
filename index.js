import Burger from './burger/burger.js';
import Element from './element/element.js';
import { products } from './products.js';

const cardTemplate = document.querySelector('.template_card').content;
const burgerIcon = document.querySelector('.header__icon_burger');
const burgerBlock = document.querySelector('.burger');
const productTemplate = document.querySelector(".template_product").content;

products.forEach((item) => {
  const element = new Element(item, cardTemplate, productTemplate);
  element.renderElement();
})

burgerIcon.addEventListener('click', () => {
  const openBurger = new Burger(burgerBlock);
  openBurger.openBurger();
})
