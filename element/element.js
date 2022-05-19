import Product from "../product/product.js";

export default class Element {
  constructor(data, cardTemplate, blockTemplate) {
    this._data = data;
    this._blockTemplate = blockTemplate;
    this._cardBlock = cardTemplate.querySelector('.element').cloneNode(true);
    this._cardImage = this._cardBlock.querySelector('.element__image');
  }

  _createElement() {
    this._cardImage.src = this._data.src;
    this._cardBlock.alt = this._data.name;
    this._cardBlock.querySelector('.element__title').textContent = this._data.title;

    this._setEventListeners();

    return this._cardBlock;
  }

  _setEventListeners() {
    this._cardBlock.addEventListener('click', () => {
      const productOpen = new Product(this._data, this._blockTemplate);
      productOpen.renderElement();  
      document.querySelectorAll(".element").remove();
    });
  }

  renderElement() {
    document.querySelector('.elements').prepend(this._createElement());
  }
}
