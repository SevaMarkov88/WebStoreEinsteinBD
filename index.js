import Burger from "./burger/burger.js";
import Cart from "./cart/cart.js";
import Element from "./element/element.js";
import { products } from "./products.js";
import { cart } from './cart.js';

const burgerIcon = document.querySelector(".header__icon_burger");
const burgerBlock = document.querySelector(".burger");
const productTemplate = document.querySelector(".template_product").content;
const cardTemplate = document.querySelector(".template_card").content;
const cartTemplate = document.querySelector(".template_cart-product").content;
const cartIcon = document.querySelector(".header__cart");

products.forEach((item) => {
  const element = new Element(item, cardTemplate, productTemplate);
  element.renderElement();
});

burgerIcon.addEventListener("click", () => {
  const openBurger = new Burger(burgerBlock);
  openBurger.openBurger();
});

cartIcon.addEventListener("click", () => {
  document.querySelectorAll(".element").forEach(e => e.remove());
  document.querySelector(".product").remove();
  cart.forEach((item) => {
    const cart = new Cart(item, cartTemplate);
    cart.renderElement();
  })
});
