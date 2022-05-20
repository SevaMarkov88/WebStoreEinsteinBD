export default class Popup {
  constructor(data, popup) {
    this._data = data;
    this._popup = popup;
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
    this._popup.querySelector('.popup__img').src = this._data.src;
    this._addListener();
  }

  closeBurger() {
    this._popup.classList.remove("popup_opened");
    this._removeListener();
  }

  _addListener() {
    document.addEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._popup.addEventListener("click", (evt) => {
      if (evt.target !== evt.target.classList.contains("popup__img")) {
        this.closeBurger();
      }
    });
  }

  _removeListener() {
    document.removeEventListener("keydown", (evt) => this._handleEscClose(evt));
    this._popup.removeEventListener("click", (evt) => {
      if (!evt.target.classList.contains("popup__img")) {
        this.closeBurger();
      }
    });
  }

  _handleEscClose(evt) {
    const key = evt.key;
    if (key === "Escape") {
      this.closeBurger();
    }
  }
}