export default class Product {
    constructor(data, blockTemplate){
        this._data = data;
        this._productBlock = blockTemplate.querySelector(".product").cloneNode(true);
    }

    _createProduct() {
        this._productBlock.querySelector(".product__title").textContent = this._data.title;
        this._productBlock.querySelector('.product__img').src = this._data.src;
        this._productBlock.querySelector(".product__img").alt = this._data.name;
        this._productBlock.querySelector(".product__price").textContent = this._data.price + ' $';
        this._productBlock.querySelector(".product__info__text").textContent = this._data.text;
        this._productBlock.querySelector(".product__properties").textContent = this._data.propperties;

        return this._productBlock;
    }

    renderElement() {
        document.querySelector(".main").prepend(this._createProduct());
    }
}