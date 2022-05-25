import Burger from "./burger/burger.js";
import Cart from "./cart/cart.js";
import Element from "./element/element.js";
import Form from "./form/form.js";
import FormValidator from './form/FormValidator.js';
import { products } from "./products.js";
import { cart } from './cartArr.js';
import { cartEmpty } from "./cartArr.js";
import { config } from './form/configValidation.js'

const burgerIcon = document.querySelector(".header__icon_burger");
const burgerBlock = document.querySelector(".burger");
const productTemplate = document.querySelector(".template_product").content;
const cardTemplate = document.querySelector(".template_card").content;
const cartTemplate = document.querySelector(".template_cart-product").content;
const cartTemplateEmpty = document.querySelector(".template_cart-empty").content;
const cartIcon = document.querySelector(".header__cart");
const loginBlock = document.querySelector('.login');
const formBlock = document.querySelector('.form__login');
const accountIcon = document.querySelector('.header__account');

const formBlockValidation = new FormValidator(config, formBlock);
formBlockValidation.enableValidation();

products.forEach((item) => {
  const element = new Element(item, cardTemplate, productTemplate);
  element.renderElement();
});

burgerIcon.addEventListener("click", () => {
  const openBurger = new Burger(burgerBlock);
  openBurger.openBurger();
});

cartIcon.addEventListener("click", () => {
  if (cart.length !== 0) {
  document.querySelectorAll(".element").forEach(e => e.remove());
  document.querySelector(".product").remove();
  cart.forEach((item) => {
    const cart = new Cart(item, cartTemplate);
    cart.renderElement();
  });
  };
  if (cart.length === 0) {
    const cartIsEmpty = new Cart(cartEmpty, cartTemplateEmpty);
    cartIsEmpty.renderEmptyCart();
    setTimeout(() => {location.reload()}, 3000);
  }
});


accountIcon.addEventListener('click', () => {
  const form = new Form(loginBlock);
  form.openForm();
})