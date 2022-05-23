export default class Cart {
  constructor(data, cartTemplate) {
    this._data = data;
    this._cartBlock = cartTemplate.querySelector(".cart").cloneNode(true);
  }

  _createCart() {
    this._cartBlock.querySelector(".cart__subtitle").textContent =
      this._data.title;
    this._cartBlock.querySelector(".cart__img").src = this._data.src;
    this._cartBlock.querySelector(".cart__img").alt = this._data.name;
    this._cartBlock.querySelector(".cart__price").textContent =
      this._data.price + " $";

    this._addListeners();

    return this._cartBlock;
  }

  _addListeners() {
    const price = this._cartBlock
      .querySelector(".cart__price")
      .textContent.split(" ")[0];
    this._cartBlock
      .querySelector(".btn_minus")
      .addEventListener("click", () => {
        this._cartBlock.querySelector(".cart__number").textContent =
          parseInt(this._cartBlock.querySelector(".cart__number").textContent) -
          1;
        this._cartBlock.querySelector(".cart__price").textContent =
          price * this._cartBlock.querySelector(".cart__number").textContent +
          " $";
        if (this._cartBlock.querySelector(".cart__number").textContent == 0) {
          this._cartBlock.remove();
        }
      });
    this._cartBlock.querySelector(".btn_plus").addEventListener("click", () => {
      this._cartBlock.querySelector(".cart__number").textContent =
        parseInt(this._cartBlock.querySelector(".cart__number").textContent) +
        1;
      this._cartBlock.querySelector(".cart__price").textContent =
        price * this._cartBlock.querySelector(".cart__number").textContent +
        " $";
    });
  }

  renderElement() {
    document.querySelector(".main").prepend(this._createCart());
  }
}
