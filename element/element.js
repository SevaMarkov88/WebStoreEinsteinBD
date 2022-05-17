export default class Element {
  constructor(data, cardTemplate) {
    this._data = data;
    this._cardBlock = cardTemplate.querySelector('.element').cloneNode(true);
    this._cardImage = this._cardBlock.querySelector('.element__image');
  }

  _createElement() {
    this._cardImage.src = this._data.src;
    this._cardBlock.alt = this._data.name;
    this._cardBlock.querySelector('.element__title').textContent = this._data.title;

    return this._cardBlock;
  }

  renderElement() {
    document.querySelector('.elements').prepend(this._createElement());
  }
}
